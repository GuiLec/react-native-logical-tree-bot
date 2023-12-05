import {useState} from 'react';
import {ChatStep} from '../types/ChatStep.interface';
import {ChatBotCase} from '../types/ChatBotCase.interface';
import {getNextChatStepsState} from '../utils/getNextChatStepsState';

export const useChatbotAnswers = ({
  chatBotCases,
  initialStepId,
}: {
  chatBotCases: ChatBotCase[];
  initialStepId: string;
}) => {
  const [chatSteps, setChatSteps] = useState<ChatStep[]>([
    {
      caseId: initialStepId,
      answer: null,
    },
  ]);

  const onAnswer = ({
    choice,
    nextCaseId,
  }: {
    choice: string;
    nextCaseId: string | null;
  }) => {
    setChatSteps(prevAnswers =>
      getNextChatStepsState({prevAnswers, choice, nextCaseId}),
    );
  };

  const currentChatBotCase = chatBotCases.find(
    chatBotCase => chatBotCase.id === chatSteps[chatSteps.length - 1]?.caseId,
  );
  const clickableAnswerOptions =
    currentChatBotCase?.clickableAnswerOptions || [];

  const nextEventualities = currentChatBotCase?.next || [];

  return {
    clickableAnswerOptions,
    onAnswer,
    chatSteps,
    nextEventualities,
  };
};
