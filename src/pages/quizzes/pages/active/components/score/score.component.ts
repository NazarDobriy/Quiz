import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz, IQuizResult, QuizService } from 'src/pages/quizzes/providers/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit {
  private quizId: number = 0;
  private isLoadingQuiz: boolean = true;
  private isLoadingQuizAnswers: boolean = true;

  private currentQuiz: IQuiz = {
    group: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  public currentQuizAnswers: IQuizResult = {
    answers: [],
    seconds: 0,
    duration: ''
  };

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.setQuizById();
    this.setQuizAnswersById();
  }

  private async setQuizById(): Promise<void> {
    this.currentQuiz = await this.quizService.getQuizById(this.quizId);
    this.isLoadingQuiz = false;
  }

  private async setQuizAnswersById(): Promise<void> {
    const tempQuizAnswers: IQuizResult | null = await this.quizService.getQuizAnswersById(this.quizId);
    if (tempQuizAnswers) {
      this.currentQuizAnswers = tempQuizAnswers;
    }
    this.isLoadingQuizAnswers = false;
  }

  get questionsLength(): number {
    return this.currentQuiz.questions.length;
  }

  get isLoading(): boolean {
    return this.isLoadingQuiz && this.isLoadingQuizAnswers;
  }

  get duration(): string {
    return this.currentQuizAnswers.duration;
  }

  get score(): number {
    return this.quizService.calcQuizResult(this.currentQuiz, this.currentQuizAnswers.answers);
  }

}
