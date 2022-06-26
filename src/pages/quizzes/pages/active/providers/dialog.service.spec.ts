import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { mockDialogConfig } from 'src/mock-data';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

import { DialogService } from './dialog.service';

describe('DialogService', () => {
  let service: DialogService;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    mockMatDialog = jasmine.createSpyObj(['open']);
    TestBed.configureTestingModule({
      providers: [
        DialogService,
        {
          provide: MatDialog,
          useValue: mockMatDialog
        }
      ]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call open', () => {
    const ref: MatDialogRef<ConfirmDialogComponent> = mockMatDialog.open(
      ConfirmDialogComponent,
      { data: mockDialogConfig }
    );
    expect(service.open(mockDialogConfig)).toEqual(ref);
  });
});
