import {
  OnInit,
  Component,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { skip, Subscription } from 'rxjs';

import { PlatformService } from '@a-core/providers/platform.service';
import { QuizzesStoreService } from '@a-core/providers/quizzes-store.service';
import { ThemeService } from '@a-pages/quizzes/providers/theme.service';
import { IPaginationScheme, IQuiz } from '@a-pages/quizzes/types/quiz.type';
import { combineLoadings } from '@a-pages/quizzes/utils';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizzesComponent implements OnInit, OnDestroy {
  quizzes: IQuiz[] = [];
  isLoading$ = combineLoadings(
    this.themeService.isLoadingThemes$,
    this.quizzesStoreService.isLoadingQuizzes$
  );

  readonly INITIAL_AMOUNT_QUIZ_CARDS = 5;

  private paginationQuizzes: IPaginationScheme<IQuiz> = {
    count: this.INITIAL_AMOUNT_QUIZ_CARDS,
    offset: 0,
    total: 0,
    data: [],
  };
  private sub = new Subscription();

  get isLimitReached(): boolean {
    return this.quizzes.length >= this.paginationQuizzes.total;
  }

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

  loadCards(): void {
    this.paginationQuizzes = {
      ...this.paginationQuizzes,
      offset: this.paginationQuizzes.offset + this.paginationQuizzes.count,
    };
    this.quizzesStoreService.getQuizzesScheme(
      this.paginationQuizzes.offset,
      this.paginationQuizzes.count
    );
  }

  private listenQuizzesScheme(): void {
    this.sub = this.quizzesStoreService.quizzesScheme$
      .pipe(skip(1))
      .subscribe((scheme: IPaginationScheme<IQuiz>) => {
        this.paginationQuizzes = scheme;
        const newQuizzes: IQuiz[] = this.paginationQuizzes.data;
        this.quizzes = [...this.quizzes, ...newQuizzes];
      });
  }

  private async setThemes(): Promise<void> {
    await this.themeService.setThemes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
