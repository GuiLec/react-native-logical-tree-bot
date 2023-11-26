import {useState} from 'react';
import {ChatBotCase} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';
import {ChatStep} from 'src/modules/chatbot/domain/types/ChatStep.interface';
import {getNextChatStepsState} from 'src/modules/chatbot/domain/utils/getNextChatStepsState';

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
  const answerOptions = currentChatBotCase?.answerOptions || [];

  const nextChatBotCaseId = currentChatBotCase?.next[0]?.stepId || null;

  return {
    answerOptions,
    onAnswer,
    chatSteps,
    nextChatBotCaseId,
  };
};
