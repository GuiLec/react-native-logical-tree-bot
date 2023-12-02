import {ChatStep} from 'src/modules/chatbot/domain/types/ChatStep.interface';

export const getNextChatStepsState = ({
  prevAnswers,
  choice,
  nextCaseId,
}: {
  prevAnswers: ChatStep[];
  choice: string;
  nextCaseId: string | null;
}) => {
  const chatStepsWithoutLastOne = prevAnswers.slice(0, prevAnswers.length - 1);
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
};
