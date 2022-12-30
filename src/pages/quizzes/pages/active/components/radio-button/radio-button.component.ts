import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  @Input() option: string = '';
  @Input() name: string = '';
  @Input() buttonStyle: string = '';
  @Input() isChecked: boolean = false;
  @Input() labelClass: string = '';
}
