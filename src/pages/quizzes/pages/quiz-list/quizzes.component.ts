import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { QuizService, IQuiz } from '../../providers/quiz.service';
import { ThemeService } from '../../providers/theme.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  public quizzes: IQuiz[] = [];

  private isLoadingThemes: boolean = true;
  private isLoadingQuizzes: boolean = true;

  constructor(
    private quizService: QuizService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    AppComponent.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        this.setThemes();
        this.setQuizzes();
      }
    });
  }

  get isLoading(): boolean {
    return this.isLoadingQuizzes && this.isLoadingThemes;
  }

  private async setQuizzes(): Promise<void> {
    this.quizzes = await this.quizService.getQuizzes();
    this.isLoadingQuizzes = false;
  }

  private async setThemes(): Promise<void> {
    await this.themeService.setThemes();
    this.isLoadingThemes = false;
  }

}
