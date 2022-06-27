import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, DebugNode } from '@angular/core';
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

  describe('Template', () => {
    let titleDebugElem: DebugElement;
    let titleElem: HTMLElement;

    let appIconDebugElem: DebugElement;
    let appIconNode: DebugNode["nativeNode"];

    let subTitleDebugElem: DebugElement;
    let subTitleElem: HTMLElement;

    let routeDebugElem: DebugElement;
    let routeElem: HTMLAnchorElement;

    let articleDebugElem: DebugElement;
    let articleElem: HTMLElement;

    beforeEach(() => {
      routeDebugElem = fixture.debugElement.query(By.css("a"));
      routeElem = routeDebugElem.nativeElement;
      articleDebugElem = fixture.debugElement.query(By.css("article"));
      articleElem = articleDebugElem.nativeElement;
      titleDebugElem = fixture.debugElement.query(By.css(".title"));
      titleElem = titleDebugElem.nativeElement;
      appIconDebugElem = fixture.debugElement.query(By.css("app-icon"));
      appIconNode = appIconDebugElem.nativeNode;
      subTitleDebugElem = fixture.debugElement.query(By.css(".subtitle"));
      subTitleElem = subTitleDebugElem.nativeElement;
    });

    it('should check routerLink', () => {
      expect(routeElem.href).toBe(window.location.origin + "/quizzes/active/1");
    });

    it('should article has new class', () => {
      expect(articleElem.classList).toContain('bg-success');
    });

    it('should title elem has new class', () => {
      expect(titleElem.classList).toContain('text-primary');
    });

    it('should check title elem text', () => {
      expect(titleElem.textContent).toBe('Music is the best');
    });

    it('should check app icon name', () => {
      expect(appIconNode.iconName).toBe('mili');
    });

    it('should check app icon classes', () => {
      expect(appIconNode.styleClass).toBe('h-12 w-12 rounded-full');
    });

    it('should subtitle elem has new class', () => {
      expect(subTitleElem.classList).toContain('text-bright');
    });

    it('should check subtitle elem text', () => {
      expect(subTitleElem.textContent).toBe('Music questions');
    });
  });
});
