import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { QuizzesApiService } from './quizzes-api.service';
import { mockQuizThemes } from 'src/mock-data';
import { IQuizTheme } from '../types/theme.type';

describe('ThemeService', () => {
  let service: ThemeService;
  let mockQuizzesApiService: jasmine.SpyObj<QuizzesApiService>;

  beforeEach(() => {
    mockQuizzesApiService = jasmine.createSpyObj(['getAllQuizThemes']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: QuizzesApiService,
          useValue: mockQuizzesApiService
        },
        ThemeService
      ]
    });
    service = TestBed.inject(ThemeService);
    mockQuizzesApiService.getAllQuizThemes.calls.reset();
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
