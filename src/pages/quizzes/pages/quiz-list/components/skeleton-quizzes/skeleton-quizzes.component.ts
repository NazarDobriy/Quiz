import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-quizzes',
  templateUrl: './skeleton-quizzes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonQuizzesComponent {
  @Input() limit: number = 0;
}
