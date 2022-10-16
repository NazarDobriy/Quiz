import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './providers/user.service';
import { LocalStorageService } from './providers/local-storage.service';
import { CommonModule } from '@angular/common';
import { PlatformService } from './providers/platform.service';
import { StoreService } from './providers/store.service';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    UserService,
    LocalStorageService,
    PlatformService,
    StoreService
  ]
})
export class CoreModule { }
