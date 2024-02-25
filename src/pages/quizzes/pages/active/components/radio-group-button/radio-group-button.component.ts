import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupButtonComponent {
  @Input() activeLabelClass = '';
  @Input() buttonStyle = '';
  @Input() labelClass = '';
  @Input() options: string[] = [];
  @Input() selectedOption: string | null = null;

  @Output() radioSelect = new EventEmitter<number>();

  inputName = 'question';

  isOptionSelected(optionIndex: number): boolean {
    return this.options[optionIndex] === this.selectedOption;
  }

  selectOption(index: number): void {
    this.selectedOption = this.options[index];
    this.radioSelect.emit(index);
  }

}
