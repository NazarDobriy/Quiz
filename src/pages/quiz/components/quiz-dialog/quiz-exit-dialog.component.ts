import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-exit-dialog',
  templateUrl: './quiz-exit-dialog.component.html',
  styleUrls: ['./quiz-exit-dialog.component.scss']
})
export class QuizExitDialogComponent {

  constructor(private router: Router) { }

  public redirectionToMainPage(): void {
    this.router.navigate(['/']);
  }

}
