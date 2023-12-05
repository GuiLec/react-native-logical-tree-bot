import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const HateYouCase = () => {
  return (
    <Chatbot.Case id={Ids.hate_you} clickableAnswerOptions={[]} next={[]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Listen...'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{'I hate you!'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
