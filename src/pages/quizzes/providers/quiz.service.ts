import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Duration } from 'src/models/duration';
import { ApiService } from 'src/pages/providers/api.service';
import { QUIZ_CARDS, QUIZ_THEMES } from '../quiz-data';
import { IQuizTheme } from './theme.service';

export interface IAnswer {
  id: string;
  text: string;
}

export interface ISimpleQuiz {
  id: number;
  title: string;
  subtitle: string;
}

export interface IQuestion {
  name: string;
  answers: IAnswer[];
  correctAnswer: string;
}

export interface IQuiz extends ISimpleQuiz {
  group: string;
  questions: IQuestion[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public quizThemes: IQuizTheme[] = QUIZ_THEMES;
  public duration: string = '';
  public correctAnswersAmount: number = 0;
  public completed: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  public getQuizzes(): Observable<IQuiz[]> {
    return this.apiService.getAll();
  }

  private getCorrectAnswers(quiz: IQuiz): string[] {
    return quiz.questions.map((question: IQuestion) => question.correctAnswer);
  }

  private calcQuizResult(quiz: IQuiz, userAnswers: string[]): number {
    const correctAnswers: string[] = this.getCorrectAnswers(quiz);
    let amountCorrectAnswers: number = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        amountCorrectAnswers++;
      }
    }
    return amountCorrectAnswers;
  }

  public finishQuiz(quiz: IQuiz, answers: string[], duration: Duration): void {
    this.completed = true;
    this.duration = duration.toString();
    this.correctAnswersAmount = this.calcQuizResult(quiz, answers);
    this.router.navigateByUrl(`/quizzes/active/${quiz.id + 1}/score`);
  }

}
