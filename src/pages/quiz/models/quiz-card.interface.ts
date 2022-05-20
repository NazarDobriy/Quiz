interface IText {
    content: string;
    color: string;
}

export interface IQuizCard {
    title: IText;
    subtitle: IText;
    iconSrc: string;
    theme: string;
}