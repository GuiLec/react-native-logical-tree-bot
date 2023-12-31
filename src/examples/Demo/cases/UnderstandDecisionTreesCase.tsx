import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const UnderstandDecisionTreesCase = () => {
  return (
    <Chatbot.Case
      id={Ids.understand_decision_trees}
      clickableAnswerOptions={['Yes', 'No', 'A little bit']}
      next={[
        {
          condition: /yes/i,
          stepId: Ids.good_go_for_drink,
        },
        {
          stepId: Ids.can_read_yes,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Sure!'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{'Can you read decision trees?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
