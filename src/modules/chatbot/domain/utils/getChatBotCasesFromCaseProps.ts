import React from 'react';
import {CaseProps} from 'src/modules/chatbot/components/Case/Case';
import {ChatBotCase} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';

export const getChatBotCasesFromCaseProps = ({
  children,
}: {
  children: React.ReactElement<CaseProps> | React.ReactElement<CaseProps>[];
}): ChatBotCase[] => {
  return React.Children.map(children, child => ({
    id: child.props.id,
    answerOptions: child.props.answerOptions,
    next: child.props.next,
    paragraphs: React.Children.map(child.props.children, t => t.props.children),
  }));
};
