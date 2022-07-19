import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/core/providers/platform.service';
import { QuizService, IQuiz, IPaginationScheme } from '../../providers/quiz.service';
import { ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  readonly INITIAL_AMOUNT_QUIZ_CARDS: number = 5;

  public quizzes: IQuiz[] = [];

  private isLoadingThemes: boolean = true;
  private isLoadingQuizzes: boolean = true;

  private paginationQuiz: IPaginationScheme<IQuiz> = {
    count: this.INITIAL_AMOUNT_QUIZ_CARDS,
    offset: 0,
    total: 0,
    data: []
  };

  constructor(
    private quizService: QuizService,
    private themeService: ThemeService,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    if (this.platformService.isBrowser) {
      this.setThemes();
      this.setQuizzes();
    }
  }

  get isLoading(): boolean {
    return this.isLoadingQuizzes && this.isLoadingThemes;
  }

  get isLimitReached(): boolean {
    return this.quizzes.length >= this.paginationQuiz.total;
  }

  private async setQuizzes(): Promise<void> {
    this.paginationQuiz = await this.quizService.getPaginatedQuizzes(
      this.paginationQuiz.offset,
      this.paginationQuiz.count
    );
    const newQuizzes: IQuiz[] = this.paginationQuiz.data;
    this.quizzes = [...this.quizzes, ...newQuizzes];
    this.isLoadingQuizzes = false;
  }

  private async setThemes(): Promise<void> {
    await this.themeService.setThemes();
    this.isLoadingThemes = false;
  }

  public async loadCards(): Promise<void> {
    this.paginationQuiz.offset += this.paginationQuiz.count;
    await this.setQuizzes();
  }

}
