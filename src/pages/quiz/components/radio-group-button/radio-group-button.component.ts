import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuizTheme } from '../../providers/theme.service';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html'
})
export class RadioGroupButtonComponent {
  @Input() options: string[] = [];
  @Input() buttonStyle: string = '';
  @Input() labelClass: string = '';
  @Input() activeLabelClass: string = '';

  @Output() onSelect = new EventEmitter<string>();

  public selectedOption: string = '';
  public inputName: string = 'question';

  public setOption(index: number = 0): void {
    this.selectedOption = this.options[index];
  }

  public selectOption(option: string): void {
    this.selectedOption = option;
    this.onSelect.emit(option);
  }

  public isOptionSelected(option: string): boolean {
    return option === this.selectedOption;
  }

}
