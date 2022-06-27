import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
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
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: ThemeService,
          useValue: mockThemeService
        }
      ],
      declarations: [
        QuizCardComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  describe('template title', () => {
    let titleDebugElem: DebugElement;
    let titleElem: HTMLElement;

    beforeEach(() => {
      titleDebugElem = fixture.debugElement.query(By.css(".title"));
      titleElem = titleDebugElem.nativeElement;
    });

    it('should check new added class', () => {
      expect(titleElem.classList).toContain('text-primary');
    });

    it('should check text', () => {
      expect(titleElem.textContent).toBe('Music is the best');
    });
  });
});
