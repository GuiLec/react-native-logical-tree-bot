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

  const nextChatBotCase = chatBotCases.find(
    chatBotCase => chatBotCase.id === chatSteps[chatSteps.length - 1]?.caseId,
  );
  const nextAnswerOptions = nextChatBotCase?.answerOptions || [];

  const nextChatBotCaseId = nextChatBotCase?.next.stepId || null;

  return {
    nextAnswerOptions,
    onAnswer,
    chatSteps,
    nextChatBotCaseId,
  };
};
