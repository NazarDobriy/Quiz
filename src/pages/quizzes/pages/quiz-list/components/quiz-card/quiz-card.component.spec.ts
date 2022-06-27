import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularSvgIconModule, SvgIconRegistryService, SvgLoader } from 'angular-svg-icon';
import { mockQuizThemes, mockQuizzes } from 'src/mock-data';
import { ThemeService } from 'src/pages/quizzes/providers/theme.service';
import { IconComponent } from 'src/shared/components/icon/icon.component';

import { QuizCardComponent } from './quiz-card.component';

describe('QuizCardComponent', () => {
  let component: QuizCardComponent;
  let fixture: ComponentFixture<QuizCardComponent>;

  let mockThemeService: jasmine.SpyObj<ThemeService>;
  let mockSvgLoader: jasmine.SpyObj<SvgLoader>;
  let mockSvgIconRegistryService: jasmine.SpyObj<SvgIconRegistryService>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj(['getThemeByText']);
    mockSvgLoader = jasmine.createSpyObj(['getSvg']);
    mockSvgIconRegistryService = jasmine.createSpyObj(['loadSvg']);

    await TestBed.configureTestingModule({
      imports: [
        AngularSvgIconModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ThemeService,
          useValue: mockThemeService
        },
        {
          provide: SvgIconRegistryService,
          useValue: mockSvgIconRegistryService
        },
        {
          provide: SvgLoader,
          useValue: mockSvgLoader
        }
      ],
      declarations: [
        QuizCardComponent,
        IconComponent
      ]
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
