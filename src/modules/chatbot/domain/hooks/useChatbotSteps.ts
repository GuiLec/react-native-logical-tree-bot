import {useState} from 'react';
import {chatBotSteps} from '../chatbot.fixture';

interface Steps {
  firstStep: Step;
  secondStep: Step;
  thirdStep: Step;
}
interface Step {
  answer: string | null;
}

export const useChatbotSteps = () => {
  const [steps, setSteps] = useState<Steps>({
    firstStep: {
      answer: null,
    },
    secondStep: {
      answer: null,
    },
    thirdStep: {
      answer: null,
    },
  });

  const setStepChoiceAnswer = (choice: string) => {
    if (steps['firstStep'].answer === null) {
      setSteps({
        ...steps,
        firstStep: {
          answer: choice,
        },
      });
    } else {
      setSteps({
        ...steps,
        secondStep: {
          answer: choice,
        },
      });
    }
  };

  const answerOptions =
    steps['firstStep'].answer === null
      ? chatBotSteps.firstStep.answerOptions
      : chatBotSteps.secondtStep.answerOptions;

  return {
    answerOptions,
    setStepChoiceAnswer,
    steps,
  };
};
