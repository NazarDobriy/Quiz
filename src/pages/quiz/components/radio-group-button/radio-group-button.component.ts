import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html'
})
export class RadioGroupButtonComponent {
  @Input() selectedOption: string | null = null;
  @Input() options: string[] = [];
  @Input() buttonStyle: string = '';
  @Input() labelClass: string = '';
  @Input() activeLabelClass: string = '';

  @Output() onSelect = new EventEmitter<string>();

  public inputName: string = 'question';

  public selectOption(option: string): void {
    this.selectedOption = option;
    this.onSelect.emit(option);
  }

  public isOptionSelected(option: string): boolean {
    return option === this.selectedOption;
  }

}
