import {useState} from 'react';
import {ChatBotCase} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';

type Answer = string | null;

export const useChatbotAnswers = ({
  chatBotCases,
}: {
  chatBotCases: ChatBotCase[];
}) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const onAnswer = (choice: string) => {
    setAnswers(prevAnswers => [...prevAnswers, choice]);
  };

  const nextAnswerOptions = chatBotCases[answers.length]?.answerOptions || [];

  return {
    nextAnswerOptions,
    onAnswer,
    answers,
  };
};
