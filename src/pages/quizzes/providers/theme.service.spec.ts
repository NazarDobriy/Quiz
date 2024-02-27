import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { QuizzesApiService } from './quizzes-api.service';

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
    service.setThemes().then(() => {
      expect(mockQuizzesApiService.getAllQuizThemes).toHaveBeenCalled();
      service.isLoadingThemes$.subscribe(res => {
        expect(res).toBeFalse();
        done();
      });
    });
  });
});
