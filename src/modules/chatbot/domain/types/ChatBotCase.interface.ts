export interface ChatBotCase {
  id: string;
  paragraphs: React.JSX.Element[];
  clickableAnswerOptions?: string[];
  next?: Eventuality[];
}

export interface Eventuality {
  condition?: RegExp;
  stepId: string | null;
}
