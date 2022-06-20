import { TestBed } from '@angular/core/testing';

import { IQuizTheme, ThemeService } from './theme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuizzesApiService } from './quizzes-api.service';

describe('ThemeService', () => {
  let service: ThemeService;

  let mockThemeService: jasmine.SpyObj<ThemeService>;
  let mockQuizzesApiService: jasmine.SpyObj<QuizzesApiService>;

  let dummyQuizThemes: IQuizTheme[] = [
    {
      titleTextClass: 'text-primary',
      primaryTextClass: 'text-bright',
      secondaryTextClass: 'text-primary',
      secondaryActiveTextClass: 'text-bright',
      numberTextClass: 'text-primary',
      numberBackgroundClass: 'bg-warning',
      backgroundClass: 'bg-success',
      btnsBackgroundClass: 'bg-accent',
      btnsTextClass: 'text-bright',
      radioButtonColor: 'accent-error',
      iconSrc: 'assets/img/Mili.svg',
      personName: 'Mili'
    },
    {
      titleTextClass: 'text-secondary',
      primaryTextClass: 'text-bright',
      secondaryTextClass: 'text-primary',
      secondaryActiveTextClass: 'text-bright',
      numberTextClass: 'text-primary',
      numberBackgroundClass: 'bg-warning',
      backgroundClass: 'bg-accent',
      btnsBackgroundClass: 'bg-error',
      btnsTextClass: 'text-bright',
      radioButtonColor: 'accent-error',
      iconSrc: 'assets/img/Steven.svg',
      personName: 'Steven'
    }
  ];

  beforeEach(() => {
    mockThemeService = jasmine.createSpyObj(['getThemeById', 'setThemes']);
    mockQuizzesApiService = jasmine.createSpyObj(['getAllQuizThemes']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ThemeService,
          useValue: mockThemeService
        },
        {
          provide: QuizzesApiService,
          useValue: mockQuizzesApiService
        },
        ThemeService
      ]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(mockThemeService).toBeTruthy();
  });

  it('should set themes', (done: DoneFn) => {
    mockQuizzesApiService.getAllQuizThemes.and.returnValue(Promise.resolve(dummyQuizThemes));
    mockThemeService.setThemes.and.returnValue(Promise.resolve());

    mockThemeService.setThemes().then(() => {
      mockQuizzesApiService.getAllQuizThemes().then((themes: IQuizTheme[]) => {
        mockThemeService.themes = themes;
        expect(mockThemeService.themes).toEqual(dummyQuizThemes);
        expect(mockThemeService.themes.length).toBe(dummyQuizThemes.length);
        done();
      });
    });
  });

  it('should get theme by text', () => {
    service.themes = dummyQuizThemes;
    const currentQuizTheme: IQuizTheme = service.getThemeByText('Emoji Bands');
    expect(currentQuizTheme).toEqual(dummyQuizThemes[0]);
  });
});
