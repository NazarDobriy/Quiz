import { ThemeService } from '@a-pages/quizzes/providers/theme.service';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { mockQuizzes, mockQuizThemes } from 'test-helpers/consts/test-consts';

import { QuizCardComponent } from './quiz-card.component';

describe('QuizCardComponent', () => {
  let component: QuizCardComponent;
  let fixture: ComponentFixture<QuizCardComponent>;

  let mockThemeService: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj(['getThemeByText']);

    await TestBed.configureTestingModule({
      declarations: [QuizCardComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: ThemeService,
          useValue: mockThemeService
        }
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

  describe('Template', () => {
    let titleDebugElem: DebugElement;
    let titleElem: HTMLElement;

    let appIconDebugElem: DebugElement;
    let appIconNode: DebugNode["nativeNode"];

    let subTitleDebugElem: DebugElement;
    let subTitleElem: HTMLElement;

    let articleDebugElem: DebugElement;
    let articleElem: HTMLElement;

    beforeEach(() => {
      articleDebugElem = fixture.debugElement.query(By.css("article"));
      articleElem = articleDebugElem.nativeElement;
      titleDebugElem = fixture.debugElement.query(By.css("#quiz-card-title"));
      titleElem = titleDebugElem.nativeElement;
      appIconDebugElem = fixture.debugElement.query(By.css("app-icon"));
      appIconNode = appIconDebugElem.nativeNode;
      subTitleDebugElem = fixture.debugElement.query(By.css("#quiz-card-subtitle"));
      subTitleElem = subTitleDebugElem.nativeElement;
    });

    it('should article has new class', () => {
      expect(articleElem.classList).toContain(component.theme.backgroundClass);
    });

    it('should title elem has new class', () => {
      expect(titleElem.classList).toContain(component.theme.titleTextClass);
    });

    it('should check title elem text', () => {
      expect(titleElem.textContent).toBe(component.quiz.title);
    });

    it('should check app icon name', () => {
      expect(appIconNode.iconName).toBe(component.theme.personName);
    });

    it('should subtitle elem has new class', () => {
      expect(subTitleElem.classList).toContain(component.theme.primaryTextClass);
    });

    it('should check subtitle elem text', () => {
      expect(subTitleElem.textContent).toBe(component.quiz.subtitle);
    });
  });
});
