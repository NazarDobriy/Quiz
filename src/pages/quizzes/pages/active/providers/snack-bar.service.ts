import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export interface ISnackBarConfig {
  verticalPosition?: string;
  duration?: number;
  panelClass?: string[] | string;
}

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  public open(message: string, action: string, config: MatSnackBarConfig<ISnackBarConfig>): void {
    this.snackBar.open(message, action, config);
  }

}
