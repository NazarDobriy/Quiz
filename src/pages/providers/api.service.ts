import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { IQuiz } from '../quizzes/providers/quiz.service';
import { IQuizTheme } from '../quizzes/providers/theme.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) { }

  public getAllQuizzes(): Observable<IQuiz[]> {
    return this.db.list<IQuiz>('quiz_cards').valueChanges();
  }

  public getAllQuizThemes(): Observable<IQuizTheme[]> {
    return this.db.list<IQuizTheme>('quiz_themes').valueChanges();
  }

}
