import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  @Input() buttonStyle = '';
  @Input() isChecked = false;
  @Input() labelClass = '';
  @Input() name = '';
  @Input() option = '';
}
