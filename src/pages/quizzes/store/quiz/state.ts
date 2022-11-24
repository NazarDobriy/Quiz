import { IQuiz } from "src/pages/quizzes/providers/quiz.service";

export interface IQuizState {
  quiz: {
    isLoading: boolean;
    data: IQuiz;
    error: string | null;
  }
}

export const quizInitialState: IQuizState = {
  quiz: {
    isLoading: false,
    data: {
      id: 0,
      title: '',
      subtitle: '',
      group: '',
      questions: []
    },
    error: null
  }
}
