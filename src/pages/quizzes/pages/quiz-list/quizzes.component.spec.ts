import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesComponent } from './quizzes.component';


describe('QuizComponent', () => {
  let component: QuizzesComponent;
  let fixture: ComponentFixture<QuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
