import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html'
})
export class RadioGroupButtonComponent {
  @Input() selectedOption: string = '0';
  @Input() options: string[] = [];
  @Input() buttonStyle: string = '';
  @Input() labelClass: string = '';
  @Input() activeLabelClass: string = '';

  @Output() onSelect = new EventEmitter<string>();

  public inputName: string = 'question';

  public selectOption(index: number): void {
    this.selectedOption = index.toString();
    this.onSelect.emit(index.toString());
  }

  public isOptionSelected(option: number): boolean {
    return option.toString() === this.selectedOption;
  }

}
