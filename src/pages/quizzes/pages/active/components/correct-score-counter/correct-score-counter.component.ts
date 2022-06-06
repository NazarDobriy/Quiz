import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-counter',
  templateUrl: './correct-score-counter.component.html'
})
export class ScoreCounterComponent {
  @Input() backgroundClass = '';
  @Input() textClass = '';
  @Input() secondaryTextClass = '';
  @Input() counter = 0;
  @Input() limit = 0;
}
