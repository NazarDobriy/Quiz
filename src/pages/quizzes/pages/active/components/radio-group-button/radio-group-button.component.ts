import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html'
})
export class RadioGroupButtonComponent {
  @Input() selectedOption: number = 0;
  @Input() options: string[] = [];
  @Input() buttonStyle: string = '';
  @Input() labelClass: string = '';
  @Input() activeLabelClass: string = '';

  @Output() onSelect = new EventEmitter<number>();

  public inputName: string = 'question';

  public selectOption(index: number): void {
    this.selectedOption = index;
    this.onSelect.emit(index);
  }

  public isOptionSelected(option: number): boolean {
    return option === this.selectedOption;
  }

}
