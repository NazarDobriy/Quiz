import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { PlatformService } from '@a-core/providers/platform.service';
import { QuizStoreService } from '@a-core/providers/quiz-store.service';
import { QuizzesStoreService } from '@a-core/providers/quizzes-store.service';
import { combineLoadings } from '@a-pages/quizzes/utils';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent implements OnInit {
  durationText$ = this.quizStoreService.quizResultSeconds$.pipe(
    map((value) =>
      Math.floor(value / 60) > 0 ? `${value} min` : `${value} sec`
    )
  );

  isLoading$ = combineLoadings(
    this.quizStoreService.isLoadingQuiz$,
    this.quizStoreService.isLoadingQuizResult$,
    this.quizzesStoreService.isLoadingQuizzes$,
    this.quizzesStoreService.isLoadingQuizzesResults$
  );

  quizzes$ = this.quizzesStoreService.quizzes$;
  quizResultScore$ = this.quizStoreService.quizResultScore$;
  quizQuestionsLength$ = this.quizStoreService.quizQuestionsLength$;
  quizzesResults$ = this.quizzesStoreService.quizzesResults$;

  private quizId = 0;

  constructor(
    private quizStoreService: QuizStoreService,
    private quizzesStoreService: QuizzesStoreService,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService
  ) {}

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);

    if (this.platformService.isBrowser) {
      this.quizStoreService.getQuiz(this.quizId);
      this.quizzesStoreService.getQuizzes();
      this.quizzesStoreService.getQuizzesResults();
    }
  }
}
