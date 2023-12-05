import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const TryRNLogicalTreeBotCase = () => {
  return (
    <Chatbot.Case
      id={Ids.try_rn_logical_tree_bot}
      clickableAnswerOptions={['Sure!']}
      next={[
        {
          stepId: Ids.intro,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>
          {'Now you should try react-native-logical-tree-bot!'}
        </Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
