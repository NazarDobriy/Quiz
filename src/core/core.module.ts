import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './providers/user.service';

const routes: Routes = [
  { path: '', component: HeaderComponent }
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    UserService
  ]
})
export class CoreModule { }
