import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Duration } from '@a-models/duration';

import { QuizzesApiService } from './quizzes-api.service';
import { IPaginationScheme, IQuestion, IQuiz, IQuizResult } from '@a-pages/quizzes/types/quiz.type';

@Injectable()
export class QuizService {
  completed = false;

  constructor(private router: Router, private quizzesApiService: QuizzesApiService) {}

  finishQuiz(quiz: IQuiz, answers: string[], duration: Duration): void {
    this.completed = true;
    this.quizzesApiService.setQuizAnswers(
      quiz.id,
      answers,
      this.calcQuizResult(quiz, answers),
      duration
    );
    this.router.navigateByUrl(`/quizzes/active/${quiz.id}/score`);
  }

  getCorrectAnswers(quiz: IQuiz): string[] {
    return quiz.questions.map((question: IQuestion) => question.correctAnswer);
  }

  getPaginatedQuizzes(offset: number, count: number): Promise<IPaginationScheme<IQuiz>> {
    return this.quizzesApiService.getPaginatedQuizzes(offset, count);
  }

  getQuizById(id: number): Promise<IQuiz> {
    return this.quizzesApiService.getQuizById(id);
  }

  getQuizResultById(id: number): Promise<IQuizResult | null> {
    return this.quizzesApiService.getQuizResultById(id);
  }

  getQuizzes(): Promise<IQuiz[]> {
    return this.quizzesApiService.getAllQuizzes();
  }

  getQuizzesResults(): Promise<IQuizResult[]> {
    return this.quizzesApiService.getQuizzesResults();
  }

  private calcQuizResult(quiz: IQuiz, userAnswers: string[]): number {
    const correctAnswers = this.getCorrectAnswers(quiz);
    let amountCorrectAnswers = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        amountCorrectAnswers++;
      }
    }
    return amountCorrectAnswers;
  }

}
