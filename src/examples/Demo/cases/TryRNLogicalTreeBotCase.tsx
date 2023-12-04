import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const TryRNLogicalTreeBotCase = () => {
  return (
    <Chatbot.Case
      id={Ids.try_rn_logical_tree_bot}
      answerOptions={['Sure!']}
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
