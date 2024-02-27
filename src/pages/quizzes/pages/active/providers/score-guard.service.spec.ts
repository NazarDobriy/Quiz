import { TestBed } from '@angular/core/testing';

import { ScoreGuardService } from './score-guard.service';

describe('ScoreGuardService', () => {
  let service: ScoreGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
