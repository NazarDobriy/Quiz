import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockQuizThemes, mockQuizzes } from 'src/mock-data';
import { ThemeService } from 'src/pages/quizzes/providers/theme.service';

import { QuizCardComponent } from './quiz-card.component';

describe('QuizCardComponent', () => {
  let component: QuizCardComponent;
  let fixture: ComponentFixture<QuizCardComponent>;

  let mockThemeService: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj(['getThemeByText']);
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ThemeService,
          useValue: mockThemeService
        }
      ],
      declarations: [ QuizCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCardComponent);
    component = fixture.componentInstance;
    component.quiz = mockQuizzes[0];
    mockThemeService.getThemeByText.and.returnValue(mockQuizThemes[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get theme', () => {
    expect(component.theme).toEqual(mockQuizThemes[0]);
  });
});
