import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { IDialogConfig } from '../types/dialog.type';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public open(config: IDialogConfig): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, { data: config });
  }

}
