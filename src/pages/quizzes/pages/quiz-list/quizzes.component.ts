import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { PlatformService } from 'src/core/providers/platform.service';
import { QuizzesStoreService } from 'src/core/providers/quizzes-store.service';
import { IQuiz, IPaginationScheme } from '../../providers/quiz.service';
import { ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizzesComponent implements OnInit, OnDestroy {
  readonly INITIAL_AMOUNT_QUIZ_CARDS: number = 5;

  private sub = new Subscription();
  private paginationQuizzes: IPaginationScheme<IQuiz> = {
    count: this.INITIAL_AMOUNT_QUIZ_CARDS,
    offset: 0,
    total: 0,
    data: [],
  };

  public quizzes: IQuiz[] = [];

  public isLoading$: Observable<boolean> = combineLatest([
    this.themeService.isLoadingThemes$,
    this.quizzesStoreService.isLoadingQuizzes$
  ]).pipe(map(item => item[0] || item[1]));

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
    this.sub = this.quizzesStoreService.quizzesScheme$.subscribe((scheme: IPaginationScheme<IQuiz>) => {
      this.paginationQuizzes = scheme;
      const newQuizzes: IQuiz[] = this.paginationQuizzes.data;
      this.quizzes = [...this.quizzes, ...newQuizzes];
    });
  }

  private async setThemes(): Promise<void> {
    await this.themeService.setThemes();
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
