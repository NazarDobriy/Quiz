import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { IQuiz } from '../quizzes/providers/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) { }

  public getAll(): Observable<IQuiz[]> {
    return this.db.list<IQuiz>('quiz_cards').valueChanges();
  }

}
