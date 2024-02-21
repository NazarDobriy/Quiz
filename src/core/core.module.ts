import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './providers/user.service';
import { LocalStorageService } from './providers/local-storage.service';
import { PlatformService } from './providers/platform.service';
import { QuizzesStoreService } from './providers/quizzes-store.service';
import { QuizStoreService } from './providers/quiz-store.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    UserService,
    LocalStorageService,
    PlatformService,
    QuizStoreService,
    QuizzesStoreService
  ]
})
export class CoreModule { }
