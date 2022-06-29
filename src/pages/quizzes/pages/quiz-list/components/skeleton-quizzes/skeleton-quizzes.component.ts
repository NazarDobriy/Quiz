import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-quizzes',
  templateUrl: './skeleton-quizzes.component.html'
})
export class SkeletonQuizzesComponent {
  @Input() limit: number = 0;
}
