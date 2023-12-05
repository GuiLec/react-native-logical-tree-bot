import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const ButCanReadNoCase = () => {
  return (
    <Chatbot.Case
      id={Ids.but_can_read_no}
      clickableAnswerOptions={['Yes', 'No']}
      next={[
        {
          condition: /no/i,
          stepId: Ids.hate_you,
        },
        {
          stepId: Ids.what,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'But you can read "No", can\'t you ?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
