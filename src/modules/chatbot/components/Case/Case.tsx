import {Eventuality} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';
import {
  Paragraph,
  ParagraphProps,
} from 'src/modules/chatbot/components/Paragraph/Paragraph';

export type CaseProps = {
  id: string;
  children:
    | React.ReactElement<ParagraphProps>
    | React.ReactElement<ParagraphProps>[];
  answerOptions: string[];
  next: Eventuality[];
};

// eslint-disable-next-line unused-imports/no-unused-vars
export const Case = (_: CaseProps) => {
  return null;
};

Case.Paragraph = Paragraph;
