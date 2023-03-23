import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

import { DialogService } from './dialog.service';
import { IDialogConfig } from '../types/dialog.type';

describe('DialogService', () => {
  let service: DialogService;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  const mockDialogConfig: IDialogConfig = {
    title: "Cancel",
    message: "Are you sure you want to exit?",
    dismissText: "No",
    confirmText: "Yes"
  };

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
    mockMatDialog.open.calls.reset();
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
