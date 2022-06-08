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
    this.getData();
    this.correctAnswersAmount = this.quizService.correctAnswersAmount;
  }

  private async getData(): Promise<void> {
    this.currentQuiz = await this.quizService.getQuizById(this.quizId);
    this.isLoading = false;
  }

  get questionsLength(): number {
    return this.currentQuiz.questions.length;
  }

}
