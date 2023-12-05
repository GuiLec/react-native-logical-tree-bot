import React, {useEffect} from 'react';
import {useSetChatbotCaseContext} from '../../domain/context/ChatbotCaseContext';
import {
  Eventuality,
  ChatBotCase,
} from '../../domain/types/ChatBotCase.interface';
import {ParagraphProps, Paragraph} from '../Paragraph/Paragraph';

export type CaseProps = {
  id: string;
  children:
    | React.ReactElement<ParagraphProps>
    | React.ReactElement<ParagraphProps>[];
  clickableAnswerOptions?: string[];
  next?: Eventuality[];
};

export const Case = (props: CaseProps) => {
  const setChatbotCaseContext = useSetChatbotCaseContext();
  useEffect(() => {
    setChatbotCaseContext((cases: ChatBotCase[]) => [
      ...cases,
      {
        id: props.id,
        clickableAnswerOptions: props.clickableAnswerOptions,
        next: props.next,
        paragraphs: React.Children.map(props.children, t => t.props.children),
      },
    ]);
  }, [
    props.clickableAnswerOptions,
    props.children,
    props.id,
    props.next,
    setChatbotCaseContext,
  ]);
  return props.children;
};

Case.Paragraph = Paragraph;
