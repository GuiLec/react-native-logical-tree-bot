export interface ChatBotStep {
  id: string;
  paragraphs: React.JSX.Element[];
  answerOptions: string[];
  next: {
    condition?: (answer: string) => boolean;
    stepId: string | null;
  };
}
