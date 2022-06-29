import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn } from '@angular/fire/compat/database';
import { QueryReference } from '@angular/fire/compat/database/interfaces';
import { firstValueFrom, map } from 'rxjs';
import { UserService } from 'src/core/providers/user.service';
import { Duration } from 'src/models/duration';
import { IQuiz, IQuizResult } from './quiz.service';
import { IQuizTheme } from './theme.service';

@Injectable()
export class QuizzesApiService {
  private primaryQuiz: IQuiz = {
    group: '',
    questions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  constructor(private db: AngularFireDatabase, private userService: UserService) { }

  public getAllQuizzes(): Promise<IQuiz[]> {
    return firstValueFrom(this.db.list<IQuiz>('quizzes').valueChanges());
  }

  public getPaginatedQuizzes(offset: number, limit: number): Promise<IQuiz[]> {
    return firstValueFrom(this.db.list<IQuiz>('quizzes', (ref: QueryReference) => {
      return ref.startAt(`${offset}`).endAt(`${limit}`).orderByKey();
    }).valueChanges());
  }

  public getAllQuizThemes(): Promise<IQuizTheme[]> {
    return firstValueFrom(this.db.list<IQuizTheme>('quiz_themes').valueChanges());
  }

  public getQuizById(id: number): Promise<IQuiz> {
    return firstValueFrom(this.db.list<IQuiz>('quizzes').valueChanges().pipe(
      map((quizzes: IQuiz[]) => {
        const selectedQuiz: IQuiz | undefined = quizzes.find((quiz: IQuiz) => quiz.id === id);
        return selectedQuiz ? selectedQuiz : this.primaryQuiz;
      })
    ));
  }

  public setQuizAnswers(quizId: number, answers: string[], correctAnswers: number, duration: Duration): void {
    if (this.userService.id) {
      const path: string = `quiz_answers/${this.userService.id}/${quizId}`;
      this.db.object<IQuizResult>(path).set({
        answersLength: answers.length,
        correct: correctAnswers,
        seconds: duration.seconds
      });
    }
  }

  public getQuizAnswersById(id: number): Promise<IQuizResult | null> {
    return firstValueFrom(this.db.object<IQuizResult>(`quiz_answers/${this.userService.id}/${id}`).valueChanges());
  }

  public getAllPassedQuizzes(): Promise<IQuizResult[]> {
    return firstValueFrom(this.db.list<IQuizResult>(`quiz_answers/${this.userService.id}`).valueChanges());
  }

}
