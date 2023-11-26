import {useState} from 'react';
import {ChatBotCase} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';

type ChatStep = {
  caseId: string;
  answer: string | null;
};

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
    setChatSteps(prevAnswers => {
      const chatStepsWithoutLastOne = prevAnswers.slice(
        0,
        prevAnswers.length - 1,
      );
      const currentChatSteps = [
        ...chatStepsWithoutLastOne,
        {
          caseId: prevAnswers[prevAnswers.length - 1]?.caseId || '',
          answer: choice,
        },
      ];
      if (!nextCaseId) return currentChatSteps;
      return [
        ...currentChatSteps,
        {
          caseId: nextCaseId,
          answer: null,
        },
      ];
    });
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
