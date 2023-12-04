import {Image, StyleSheet} from 'react-native';
import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';
import goodbyeImage from 'src/examples/Demo/assets/goodbye.png';
import {Box} from 'src/design-system/components/layout/box/Box';

export const GoodbyeCase = () => {
  return (
    <Chatbot.Case id={Ids.goodbye} clickableAnswerOptions={[]} next={[]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Alright, have a good day then!'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Box alignSelf="stretch" alignItems="center">
          <Image style={styles.image} source={goodbyeImage} />
        </Box>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};

const IMAGE_HEIGHT = 120;
const IMAGE_WIDTH = 100;

const styles = StyleSheet.create({
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
  },
});
