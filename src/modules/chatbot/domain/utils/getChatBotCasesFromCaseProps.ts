import React from 'react';
import {CaseProps} from 'src/modules/chatbot/components/Case';

export const getChatBotCasesFromCaseProps = ({
  children,
}: {
  children: React.ReactElement<CaseProps> | React.ReactElement<CaseProps>[];
}) => {
  return React.Children.map(children, child => child.props);
};
