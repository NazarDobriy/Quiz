import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Duration } from 'src/models/duration';
import { QuizzesApiService } from './quizzes-api.service';

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

export interface IQuizResult {
  answersLength: number;
  correct: number;
  seconds: number;
}

export interface IPaginationScheme<T> {
  count: number;
  offset: number;
  total: number;
  data: T[];
}

@Injectable()
export class QuizService {
  public completed: boolean = false;

  constructor(private router: Router, private quizzesApiService: QuizzesApiService) {}

  public getQuizzes(): Promise<IQuiz[]> {
    return this.quizzesApiService.getAllQuizzes();
  }

  public getPaginatedQuizzes(offset: number): Promise<IPaginationScheme<IQuiz> | null> {
    return this.quizzesApiService.getPaginatedQuizzes(offset);
  }

  public getPassedQuizzes(): Promise<IQuizResult[]> {
    return this.quizzesApiService.getAllPassedQuizzes();
  }

  public getQuizById(id: number): Promise<IQuiz> {
    return this.quizzesApiService.getQuizById(id);
  }

  public getQuizAnswersById(id: number): Promise<IQuizResult | null> {
    return this.quizzesApiService.getQuizAnswersById(id);
  }

  public finishQuiz(quiz: IQuiz, answers: string[], duration: Duration): void {
    this.completed = true;
    this.quizzesApiService.setQuizAnswers(
      quiz.id, 
      answers, 
      this.calcQuizResult(quiz, answers), 
      duration
    );
    this.router.navigateByUrl(`/quizzes/active/${quiz.id}/score`);
  }

  private getCorrectAnswers(quiz: IQuiz): string[] {
    return quiz.questions.map((question: IQuestion) => question.correctAnswer);
  }

  public calcQuizResult(quiz: IQuiz, userAnswers: string[]): number {
    const correctAnswers: string[] = this.getCorrectAnswers(quiz);
    let amountCorrectAnswers: number = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        amountCorrectAnswers++;
      }
    }
    return amountCorrectAnswers;
  }

}
