import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    IconComponent
  ]
})
export class SharedModule { }
