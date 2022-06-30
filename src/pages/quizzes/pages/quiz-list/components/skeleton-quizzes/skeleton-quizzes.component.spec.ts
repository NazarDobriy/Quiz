import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonQuizzesComponent } from './skeleton-quizzes.component';

describe('SkeletonQuizzesComponent', () => {
  let component: SkeletonQuizzesComponent;
  let fixture: ComponentFixture<SkeletonQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
