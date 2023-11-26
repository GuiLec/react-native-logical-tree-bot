import {useState} from 'react';
import {chatBotSteps} from '../chatbot.fixture';

type Answer = string | null;

export const useChatbotAnswers = () => {
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
