import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService, IQuizTheme } from '../../providers/theme.service';
import { IQuiz, QuizService } from '../../providers/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  readonly MIN_AMOUNT_QUESTIONS: number = 1;
  readonly MAX_AMOUNT_QUESTIONS: number = 10;

  public currentQuiz: IQuiz = {
    name: '',
    listQuestions: [],
    id: 0,
    title: '',
    subtitle: ''
  };

  public quizTheme: IQuizTheme = {
    primaryTextClass: '',
    secondaryTextClass: '',
    secondaryActiveTextClass: '',
    numberTextClass: '',
    numberBackgroudClass: '',
    backgroudClass: '',
    btnsBackgroudClass: '',
    btnsTextClass: '',
    radioButtonColor: ''
  };

  public quizId: number = 0;
  public questionCounter: number = 1;
  public listAnswers: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.quizId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.currentQuiz = this.quizService.getQuizById(this.quizId);
    this.listAnswers = this.currentQuiz.listQuestions[this.questionCounter - 1].listAnswers;
    this.quizTheme = this.themeService.getThemeByText(this.currentQuiz.subtitle);
    
    if (this.lastWordIncludeQuiz()) {
      const tempQuizSubtitle: string[] = this.currentQuiz.subtitle.split(' ');
      tempQuizSubtitle.pop();
      this.currentQuiz.subtitle = tempQuizSubtitle.join(' ');
    }
  }

  get currentQuestionName(): string {
    return this.currentQuiz?.listQuestions[this.questionCounter - 1]?.name || 'N/A';
  }

  get currentQuestionAnswers(): string[] {
    return this.currentQuiz?.listQuestions[this.questionCounter - 1]?.listAnswers || [];
  }

  public lastWordIncludeQuiz(): boolean {
    const subtitleArray: string[] = this.currentQuiz.subtitle.split(' ');
    return subtitleArray[subtitleArray.length - 1].toLocaleLowerCase().includes('quiz');
  }

  public switchNextQuestion(): void {
    this.questionCounter++;
  }

  public switchPrevQuestion(): void {
    this.questionCounter--;
  }

  public onSelect(option: string) {
    console.log(option);
  }

  public isLastQuestion(): boolean {
    return this.questionCounter === this.MAX_AMOUNT_QUESTIONS;
  }

}
