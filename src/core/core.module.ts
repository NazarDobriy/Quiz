import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './providers/user.service';
import { LocalStorageService } from './providers/local-storage.service';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    UserService,
    LocalStorageService
  ]
})
export class CoreModule { }
