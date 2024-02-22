import { MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DialogService } from './dialog.service';
import { QuizService } from '@a-pages/quizzes/providers/quiz.service';
import { ConfirmDialogComponent } from '@a-pages/quizzes/pages/active/components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class QuizGuardService {
  constructor(
    private quizService: QuizService,
    private dialogService: DialogService
  ) {}

  canDeactivate(): Observable<boolean> | boolean {
    if (this.quizService.completed) {
      return true;
    }
    return this.openExitDialog()
      .afterClosed()
      .pipe(map((result) => !!result));
  }

  private openExitDialog(): MatDialogRef<ConfirmDialogComponent> {
    return this.dialogService.open({
      title: 'Leave',
      message:
        'Are you sure you want to exit and cancel the quiz? Your answers will not be saved.',
      dismissText: 'Back to quiz',
      confirmText: 'Go on main page',
    });
  }
}
