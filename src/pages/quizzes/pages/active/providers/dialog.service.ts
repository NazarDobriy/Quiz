import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { IDialogConfig } from '@a-pages/quizzes/pages/active/types/dialog.type';
import { ConfirmDialogComponent } from '@a-pages/quizzes/pages/active/components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public open(config: IDialogConfig): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, { data: config });
  }

}
