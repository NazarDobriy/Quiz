export interface IAnswer {
  id: string;
  text: string;
}

export interface ISimpleQuiz {
  id: number;
  title: string;
  subtitle: string;
}

export interface IQuestion {
  name: string;
  answers: IAnswer[];
  correctAnswer: string;
}

export interface IQuiz extends ISimpleQuiz {
  group: string;
  questions: IQuestion[];
}

export interface IQuizResult {
  answersLength: number;
  correct: number;
  seconds: number;
}

export interface IPaginationScheme<T> {
  count: number;
  offset: number;
  total: number;
  data: T[];
}
