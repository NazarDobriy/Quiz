import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent {
  @Input() option: string = '';
  @Input() name: string = '';
  @Input() buttonStyle: string = '';
  @Input() isChecked: boolean = false;
  @Input() labelClass: string = '';
}
