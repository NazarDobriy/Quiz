import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public timeStrResult: string = "";

  public countTimeSpent(timeStart: Date, timeEnd: Date): void {
    this.timeStrResult = "";
    const differenceTime: Map<string, number> = new Map();

    differenceTime.set('days', timeEnd.getDay() - timeStart.getDay());
    differenceTime.set('hours', timeEnd.getHours() - timeStart.getHours());
    differenceTime.set('min', timeEnd.getMinutes() - timeStart.getMinutes());
    differenceTime.set('sec', timeEnd.getSeconds() - timeStart.getSeconds());

    for (const [key, value] of differenceTime.entries()) {
      this.timeStrResult += `${value ? `${value} ${key} ` : ''}`;
    }

    this.timeStrResult = this.timeStrResult.trim();
  }
}
