import { Injectable } from '@angular/core';
import { QUIZ_CARDS_BACKGROUND_COLORS } from '../quiz-data';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public backgroundColors: string[] = QUIZ_CARDS_BACKGROUND_COLORS;

  constructor() { }

  public calculateColor(text: string): number {
    let sum: number = 0;
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i);
    }
    return sum % this.backgroundColors.length;
  }

  public getColorById(id: number = 0): string {
    return this.backgroundColors[id];
  }

}
