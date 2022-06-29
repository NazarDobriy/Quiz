import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonQuizCardComponent } from './skeleton-quiz-card.component';

describe('SkeletonQuizCardComponent', () => {
  let component: SkeletonQuizCardComponent;
  let fixture: ComponentFixture<SkeletonQuizCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonQuizCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonQuizCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
