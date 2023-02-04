import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './providers/user.service';
import { LocalStorageService } from './providers/local-storage.service';
import { CommonModule } from '@angular/common';
import { PlatformService } from './providers/platform.service';
import { QuizzesStoreService } from './providers/quizzes-store.service';
import { QuizStoreService } from './providers/quiz-store.service';


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
    QuizStoreService,
    QuizzesStoreService
  ]
})
export class CoreModule { }
