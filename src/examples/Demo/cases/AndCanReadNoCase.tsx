import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const AndCanReadNoCase = () => {
  return (
    <Chatbot.Case
      id={Ids.and_can_read_no}
      clickableAnswerOptions={['Yes', 'No']}
      next={[
        {
          condition: /no/i,
          stepId: Ids.entered_unknown_word_twice,
        },
        {
          stepId: Ids.good_go_for_drink,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'...And you can read "No", can\'t you ?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
