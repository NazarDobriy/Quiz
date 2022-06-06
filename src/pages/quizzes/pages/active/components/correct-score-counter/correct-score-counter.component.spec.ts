import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCounterComponent } from './correct-score-counter.component';

describe('ScoreCounterComponent', () => {
  let component: ScoreCounterComponent;
  let fixture: ComponentFixture<ScoreCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
