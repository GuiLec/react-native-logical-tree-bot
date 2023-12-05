import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const CanReadYesCase = () => {
  return (
    <Chatbot.Case
      id={Ids.can_read_yes}
      clickableAnswerOptions={['Yes', 'No']}
      next={[
        {
          condition: /yes/i,
          stepId: Ids.and_can_read_no,
        },
        {
          stepId: Ids.but_can_read_no,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Okay, can you read the word "Yes"?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
