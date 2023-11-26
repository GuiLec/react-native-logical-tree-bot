import {useState} from 'react';
import {ChatBotStep} from 'src/modules/chatbot/domain/types/ChatBotStep.interface';

type Answer = string | null;

export const useChatbotAnswers = ({
  chatBotSteps,
}: {
  chatBotSteps: ChatBotStep[];
}) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const onAnswer = (choice: string) => {
    setAnswers(prevAnswers => [...prevAnswers, choice]);
  };

  const nextAnswerOptions = chatBotSteps[answers.length]?.answerOptions || [];

  return {
    nextAnswerOptions,
    onAnswer,
    answers,
  };
};
