import {
  ChatBotCase,
  Eventuality,
} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';
import {
  Paragraph,
  ParagraphProps,
} from 'src/modules/chatbot/components/Paragraph/Paragraph';
import React, {useEffect} from 'react';
import {useSetChatbotCaseContext} from 'src/modules/chatbot/domain/context/ChatbotCaseContext';

export type CaseProps = {
  id: string;
  children:
    | React.ReactElement<ParagraphProps>
    | React.ReactElement<ParagraphProps>[];
  answerOptions?: string[];
  next?: Eventuality[];
};

export const Case = (props: CaseProps) => {
  const setChatbotCaseContext = useSetChatbotCaseContext();
  useEffect(() => {
    setChatbotCaseContext((cases: ChatBotCase[]) => [
      ...cases,
      {
        id: props.id,
        answerOptions: props.answerOptions,
        next: props.next,
        paragraphs: React.Children.map(props.children, t => t.props.children),
      },
    ]);
  }, [
    props.answerOptions,
    props.children,
    props.id,
    props.next,
    setChatbotCaseContext,
  ]);
  return props.children;
};

Case.Paragraph = Paragraph;
