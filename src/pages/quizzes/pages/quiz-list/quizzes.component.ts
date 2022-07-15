import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { QuizService, IQuiz, IPaginationScheme } from '../../providers/quiz.service';
import { ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  readonly INITIAL_AMOUNT_QUIZ_CARDS: number = 5;

  public quizzes: IQuiz[] = [];

  private isBrowser: boolean = false;
  private isLoadingThemes: boolean = true;
  private isLoadingQuizzes: boolean = true;

  private paginationQuiz: IPaginationScheme<IQuiz> = {
    count: this.INITIAL_AMOUNT_QUIZ_CARDS,
    offset: 0,
    total: 0,
    data: []
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private quizService: QuizService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
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
