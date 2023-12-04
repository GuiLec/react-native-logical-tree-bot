export interface ChatBotCase {
  id: string;
  paragraphs: React.JSX.Element[];
  answerOptions: string[];
  next?: Eventuality[];
}

export interface Eventuality {
  condition?: RegExp;
  stepId: string | null;
}
