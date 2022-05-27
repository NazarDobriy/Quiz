import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent {
  @Input() answer: string = '';
  @Input() name: string = '';
  @Input() styleClass: string = '';
  @Input() isChecked: boolean = false;
}
