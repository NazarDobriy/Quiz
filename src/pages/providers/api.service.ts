import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { firstValueFrom, map, Observable, pipe } from 'rxjs';
import { IQuiz } from '../quizzes/providers/quiz.service';
import { IQuizTheme } from '../quizzes/providers/theme.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzesApiService {

  constructor(private db: AngularFireDatabase) { }

  public getAllQuizzes(): Promise<IQuiz[]> {
    return firstValueFrom(this.db.list<IQuiz>('quiz_cards').valueChanges());
  }

  public getAllQuizThemes(): Promise<IQuizTheme[]> {
    return firstValueFrom(this.db.list<IQuizTheme>('quiz_themes').valueChanges());
  }

  public getQuizById(id: number): Promise<IQuiz> {
    return firstValueFrom(this.db.list<IQuiz>('quiz_cards').valueChanges().pipe(
      map(quizzes => quizzes[id])
    ));
  }

}
