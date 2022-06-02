import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizExitDialogComponent } from './quiz-exit-dialog.component';

describe('QuizExitDialogComponent', () => {
  let component: QuizExitDialogComponent;
  let fixture: ComponentFixture<QuizExitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizExitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizExitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
