import { Component, OnInit } from '@angular/core';
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

  private paginationQuiz: IPaginationScheme = {
    count: this.INITIAL_AMOUNT_QUIZ_CARDS,
    offset: 0,
    total: 0,
    data: []
  };

  constructor(
    private quizService: QuizService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.setThemes();
    this.setQuizzes();
  }

  get isLoading(): boolean {
    return this.isLoadingQuizzes && this.isLoadingThemes;
  }

  get isLimitReached(): boolean {
    return this.quizzes.length === this.paginationQuiz.total;
  }

  private async setQuizzes(): Promise<void> {
    this.paginationQuiz.data = await this.quizService.getQuizzes();
    this.paginationQuiz.total = this.paginationQuiz.data.length;
    this.loadCards();
    this.isLoadingQuizzes = false;
  }

  private async setThemes(): Promise<void> {
    await this.themeService.setThemes();
    this.isLoadingThemes = false;
  }

  public loadCards(): void {
    const newQuizzes: IQuiz[] = [];
    for (let i = this.paginationQuiz.offset; i < this.paginationQuiz.count; i++) {
      newQuizzes.push(this.paginationQuiz.data[i]);
    }
    this.paginationQuiz.offset = this.paginationQuiz.count;
    this.paginationQuiz.count += this.INITIAL_AMOUNT_QUIZ_CARDS;
    this.quizzes = [...this.quizzes, ...newQuizzes];
  }

}
