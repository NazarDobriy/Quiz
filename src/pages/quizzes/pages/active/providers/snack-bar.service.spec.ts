import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarService } from './snack-bar.service';

describe('SnackBarService', () => {
  let service: SnackBarService;
  let mockMatSnackBar: jasmine.SpyObj<MatSnackBar>;

  const message: string = "Hello", action: string = "close";

  beforeEach(() => {
    mockMatSnackBar = jasmine.createSpyObj(['open']);
    TestBed.configureTestingModule({
      providers: [
        SnackBarService,
        {
          provide: MatSnackBar,
          useValue: mockMatSnackBar
        }
      ]
    });
    service = TestBed.inject(SnackBarService);
    mockMatSnackBar.open.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call open', () => {
    service.open(message, action);
    expect(mockMatSnackBar.open).toHaveBeenCalled();
    expect(mockMatSnackBar.open).toHaveBeenCalledWith(
      message,
      action,
      {
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['text-primary', 'bg-transparent']
      }
    );
  });
});
