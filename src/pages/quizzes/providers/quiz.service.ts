import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Duration } from '@a-models/duration';
import { QuizzesApiService } from './quizzes-api.service';
import { IPaginationScheme, IQuestion, IQuiz, IQuizResult } from '@a-pages/quizzes/types/quiz.type';

@Injectable()
export class QuizService {
  public completed: boolean = false;

  constructor(private router: Router, private quizzesApiService: QuizzesApiService) {}

  public getQuizzes(): Promise<IQuiz[]> {
    return this.quizzesApiService.getAllQuizzes();
  }

  public getPaginatedQuizzes(offset: number, count: number): Promise<IPaginationScheme<IQuiz>> {
    return this.quizzesApiService.getPaginatedQuizzes(offset, count);
  }

  public getQuizzesResults(): Promise<IQuizResult[]> {
    return this.quizzesApiService.getQuizzesResults();
  }

  public getQuizById(id: number): Promise<IQuiz> {
    return this.quizzesApiService.getQuizById(id);
  }

  public getQuizResultById(id: number): Promise<IQuizResult | null> {
    return this.quizzesApiService.getQuizResultById(id);
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
