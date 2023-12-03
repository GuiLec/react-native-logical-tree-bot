import {ParagraphProps} from 'src/modules/chatbot/components/Paragraph';
import {Eventuality} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';

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
