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
  private isLoadingPassedQuizzes: boolean = true;
  public passedQuizzes: IQuizResult[] = [];

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
    this.setPassedQuizzes();
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

  private async setPassedQuizzes(): Promise<void> {
    this.passedQuizzes = await this.quizService.getPassedQuizzes();
    this.isLoadingPassedQuizzes = false;
  }

  get amountPassedQuizzes(): number {
    return this.passedQuizzes.length;
  }

  get questionsLength(): number {
    return this.currentQuiz.questions.length;
  }

  get isLoading(): boolean {
    return this.isLoadingQuiz && this.isLoadingQuizAnswers && this.isLoadingPassedQuizzes;
  }

  get duration(): string {
    return this.currentQuizAnswers.duration;
  }

  get score(): number {
    return this.quizService.calcQuizResult(this.currentQuiz, this.currentQuizAnswers.answers);
  }

}
