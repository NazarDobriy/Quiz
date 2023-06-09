import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-counter',
  templateUrl: './score-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreCounterComponent {
  @Input() backgroundClass = 'bg-warning';
  @Input() textClass = 'text-primary';
  @Input() secondaryTextClass = 'text-bright';
  @Input() counter = 0;
  @Input() limit = 0;
}
