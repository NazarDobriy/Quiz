import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  public open(message: string, action: string): void {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 2000,
      panelClass: ['text-primary', 'bg-shade']
    });
  }

}
