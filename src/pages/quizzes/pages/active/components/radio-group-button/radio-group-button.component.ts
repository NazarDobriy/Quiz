import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupButtonComponent {
  @Input() selectedOption: string | null = null;
  @Input() options: string[] = [];
  @Input() buttonStyle: string = '';
  @Input() labelClass: string = '';
  @Input() activeLabelClass: string = '';

  @Output() radioSelect = new EventEmitter<number>();

  public inputName: string = 'question';

  public selectOption(index: number): void {
    this.selectedOption = this.options[index];
    this.radioSelect.emit(index);
  }

  public isOptionSelected(optionIndex: number): boolean {
    return this.options[optionIndex] === this.selectedOption;
  }

}
