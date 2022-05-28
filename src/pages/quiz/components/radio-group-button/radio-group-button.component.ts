import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  public selectOption(option: string): void {
    this.selectedOption = option;
    this.onSelect.emit(option);
  }

  public isOptionSelected(option: string): boolean {
    return option === this.selectedOption;
  }

}
