import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizConfirmDialogComponent } from './quiz-confirm-dialog.component';

describe('QuizExitDialogComponent', () => {
  let component: QuizConfirmDialogComponent;
  let fixture: ComponentFixture<QuizConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
