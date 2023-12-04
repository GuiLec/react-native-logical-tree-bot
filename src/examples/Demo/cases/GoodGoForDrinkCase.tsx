import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const GoodGoForDrinkCase = () => {
  return (
    <Chatbot.Case
      id={Ids.good_go_for_drink}
      answerOptions={['Gulp, gulp']}
      next={[
        {
          stepId: Ids.try_rn_logical_tree_bot,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Good!'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{"Let's go for a drink then!"}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
