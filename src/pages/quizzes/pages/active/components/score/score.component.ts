import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz, QuizService } from 'src/pages/quizzes/providers/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit {
  private quizId: number = 0;
  public duration: string = '';
  public correctAnswersAmount: number = 0;
  public isLoading: boolean = true;

  private currentQuiz: IQuiz = {
    group: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.duration = this.quizService.duration;
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.setQuiz();
    this.correctAnswersAmount = this.quizService.correctAnswersAmount;
  }

  private async setQuiz(): Promise<void> {
    const quizzes: IQuiz[] = await this.quizService.getQuizzes();
    this.currentQuiz = quizzes[this.quizId];
    this.isLoading = false;
  }

  get questionsLength(): number {
    return this.currentQuiz.questions.length;
  }

}
