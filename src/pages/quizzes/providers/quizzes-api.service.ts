import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { firstValueFrom, map } from 'rxjs';
import { Duration } from 'src/models/duration';
import { IQuiz } from './quiz.service';
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

  constructor(private db: AngularFireDatabase) { }

  public getAllQuizzes(): Promise<IQuiz[]> {
    return firstValueFrom(this.db.list<IQuiz>('quizzes').valueChanges());
  }

  public getAllQuizThemes(): Promise<IQuizTheme[]> {
    return firstValueFrom(this.db.list<IQuizTheme>('quiz_themes').valueChanges());
  }

  public getQuizById(id: number): Promise<IQuiz> {
    return firstValueFrom(this.db.list<IQuiz>('quizzes').valueChanges().pipe(
      map(quizzes => {
        const selectedQuiz: IQuiz | undefined = quizzes.find((quiz: IQuiz) => quiz.id === id);
        return selectedQuiz ? selectedQuiz : this.primaryQuiz;
      })
    ));
  }

}
