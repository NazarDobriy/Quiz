import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonQuizComponent } from './skeleton-quiz.component';

describe('SkeletonQuizComponent', () => {
  let component: SkeletonQuizComponent;
  let fixture: ComponentFixture<SkeletonQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
