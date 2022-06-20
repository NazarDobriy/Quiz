import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './providers/user.service';
import { LocalStorageService } from './providers/local-storage.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HeaderComponent }
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    AngularSvgIconModule.forRoot()
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
