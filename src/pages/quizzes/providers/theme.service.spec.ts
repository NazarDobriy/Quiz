import { TestBed } from '@angular/core/testing';

import { IQuizTheme, ThemeService } from './theme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuizzesApiService } from './quizzes-api.service';
import { mockQuizThemes } from 'src/mock-data';

describe('ThemeService', () => {
  let service: ThemeService;
  let mockQuizzesApiService: jasmine.SpyObj<QuizzesApiService>;

  beforeEach(() => {
    mockQuizzesApiService = jasmine.createSpyObj(['getAllQuizThemes']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
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
    expect(service).toBeTruthy();
  });

  it('should set themes', (done: DoneFn) => {
    mockQuizzesApiService.getAllQuizThemes.and.returnValue(Promise.resolve(mockQuizThemes));
    service.setThemes().then(() => {
      expect(service.themes).toEqual(mockQuizThemes);
      expect(service.themes.length).toBe(mockQuizThemes.length);
      done();
    });
  });

  it('should get theme by text', () => {
    service.themes = mockQuizThemes;
    const currentQuizTheme: IQuizTheme = service.getThemeByText('Emoji Bands');
    expect(currentQuizTheme).toEqual(mockQuizThemes[0]);
  });
});
