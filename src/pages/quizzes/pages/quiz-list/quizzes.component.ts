import { Component, OnInit } from '@angular/core';
import { Observable, skip } from 'rxjs';
import { PlatformService } from 'src/core/providers/platform.service';
import { QuizzesStoreService } from 'src/core/providers/quizzes-store.service';
import { IQuiz, IPaginationScheme } from '../../providers/quiz.service';
import { ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
})
export class QuizzesComponent implements OnInit {
  readonly INITIAL_AMOUNT_QUIZ_CARDS: number = 5;

  private paginationQuizzes: IPaginationScheme<IQuiz> = {
    count: this.INITIAL_AMOUNT_QUIZ_CARDS,
    offset: 0,
    total: 0,
    data: [],
  };

  public quizzes: IQuiz[] = [];
  public isLoadingThemes: boolean = true;

  public quizzesScheme$: Observable<IPaginationScheme<IQuiz>> = this.quizzesStoreService.quizzesScheme$;
  public isLoadingQuizzes$: Observable<boolean> = this.quizzesStoreService.isLoadingQuizzes$;
  public quizzesError$: Observable<string | null> = this.quizzesStoreService.quizzesError$;

  constructor(
    private themeService: ThemeService,
    private platformService: PlatformService,
    private quizzesStoreService: QuizzesStoreService
  ) {}

  ngOnInit(): void {
    if (this.platformService.isBrowser) {
      this.setThemes();
      this.quizzesStoreService.getQuizzesScheme(
        this.paginationQuizzes.offset,
        this.paginationQuizzes.count
      );
      this.listenQuizzesScheme();
    }
  }

  get isLimitReached(): boolean {
    return this.quizzes.length >= this.paginationQuizzes.total;
  }

  private listenQuizzesScheme(): void {
    this.quizzesScheme$.pipe(skip(1)).subscribe((scheme: IPaginationScheme<IQuiz>) => {
      this.paginationQuizzes = scheme;
      const newQuizzes: IQuiz[] = this.paginationQuizzes.data;
      this.quizzes = [...this.quizzes, ...newQuizzes];
    });
  }

  private async setThemes(): Promise<void> {
    await this.themeService.setThemes();
    this.isLoadingThemes = false;
  }

  public loadCards(): void {
    this.paginationQuizzes = {
      ...this.paginationQuizzes,
      offset: this.paginationQuizzes.offset + this.paginationQuizzes.count,
    };
    this.quizzesStoreService.getQuizzesScheme(
      this.paginationQuizzes.offset,
      this.paginationQuizzes.count
    );
  }

}
