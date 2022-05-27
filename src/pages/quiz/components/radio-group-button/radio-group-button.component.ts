import { Component, Input, OnInit } from '@angular/core';
import { IQuizTheme } from '../../providers/theme.service';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html',
  styleUrls: ['./radio-group-button.component.scss']
})
export class RadioGroupButtonComponent implements OnInit {
  @Input() answers: string[] = [];
  @Input() theme: IQuizTheme = {
    primaryTextClass: '',
    secondaryTextClass: '',
    secondaryActiveTextClass: '',
    numberTextClass: '',
    numberBackgroudClass: '',
    backgroudClass: '',
    btnsBackgroudClass: '',
    btnsTextClass: '',
    radioButtonColor: ''
  };

  public selectedAnswer: string = '';
  public inputName: string = 'question';

  constructor() { }

  ngOnInit(): void {
  }

  public setAnswer(index: number = 0): void {
    this.selectedAnswer = this.answers[index];
  }

  public isSameAnswer(currentAnswer: string): boolean {
    return currentAnswer === this.selectedAnswer;
  }

}
