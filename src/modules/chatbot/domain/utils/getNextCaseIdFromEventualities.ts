import {Eventuality} from '../types/ChatBotCase.interface';

export const getNextCaseIdFromEventualities = ({
  eventualities,
  choice,
}: {
  eventualities: Eventuality[];
  choice: string;
}) => {
  for (const eventuality of eventualities) {
    if (!eventuality.condition) return eventuality.stepId;
    if (eventuality.condition.test(choice)) return eventuality.stepId;
  }
  return null;
};
