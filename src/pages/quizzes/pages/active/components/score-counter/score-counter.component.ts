import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-counter',
  templateUrl: './score-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreCounterComponent {
  @Input() backgroundClass = 'bg-warning';
  @Input() counter = 0;
  @Input() limit = 0;
  @Input() secondaryTextClass = 'text-bright';
  @Input() textClass = 'text-primary';
}
