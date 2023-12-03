import styled from '@emotion/native';
import {SafeAreaView} from 'react-native';
import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Box} from 'src/design-system/components/layout/box/Box';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot';

export const Demo = () => {
  return (
    <StyledSafeAreaView>
      <Chatbot initialStepId="firstStep">
        <Chatbot.Case
          id="firstStep"
          answerOptions={['Yes, please !', 'I am fine, I already have a meal']}
          next={[
            {
              condition: /Yes/,
              stepId: 'thirdStep',
            },
            {
              stepId: 'secondStep',
            },
          ]}>
          <Chatbot.Case.Paragraph>
            <Typography>{"Hi James 👋\nIt's almost lunch time!"}</Typography>
          </Chatbot.Case.Paragraph>
          <Chatbot.Case.Paragraph>
            <Typography>
              {
                'May I suggest you a meal you can cook respecting your 1800 kcal daily goal?'
              }
            </Typography>
          </Chatbot.Case.Paragraph>
        </Chatbot.Case>
        <Chatbot.Case
          id="secondStep"
          answerOptions={[
            'Excellent !',
            'Eurk, I don’t like it',
            'I don’t have all the ingredients',
          ]}
          next={[]}>
          <Chatbot.Case.Paragraph>
            <Typography>
              {
                "Ah, a delightful culinary challenge! Let's create a satisfying and nutritious meal that's around 400 calories!"
              }
            </Typography>
          </Chatbot.Case.Paragraph>
          <Chatbot.Case.Paragraph>
            <Typography>
              {'I suggest: a Light Veggie and Egg Salad !'}
            </Typography>
          </Chatbot.Case.Paragraph>
          <Chatbot.Case.Paragraph>
            <Typography>{"That's the ingredients list:"}</Typography>
          </Chatbot.Case.Paragraph>
          <Chatbot.Case.Paragraph>
            <Box>
              <BulletParagraph text="Eggs" />
              <BulletParagraph text="Avocado (for healthy fats and creaminess)" />
              <BulletParagraph text="Vegetables (let's assume a mix of leafy greens, tomatoes, cucumbers, and bell peppers)" />
              <BulletParagraph text="Lemon (for zest and juice)" />
              <BulletParagraph text="Mayonnaise (we'll use a small amount for creaminess)" />
              <BulletParagraph text="Olive oil (for the dressing)" />
            </Box>
          </Chatbot.Case.Paragraph>
          <Chatbot.Case.Paragraph>
            <Typography>{'Does it sound good to you?'}</Typography>
          </Chatbot.Case.Paragraph>
        </Chatbot.Case>
        <Chatbot.Case
          id="thirdStep"
          answerOptions={['Hello']}
          next={[
            {
              stepId: 'secondStep',
            },
          ]}>
          <Chatbot.Case.Paragraph>
            <Typography>{"Let's cook !"}</Typography>
          </Chatbot.Case.Paragraph>
        </Chatbot.Case>
      </Chatbot>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});

const CIRCLE_SIZE = 4;
const Circle = styled(Box)(() => ({
  borderRadius: 1_000_000,
}));

const ShrinkedTypography = styled(Typography)(() => ({
  flexShrink: 1,
}));

const BulletParagraph = ({text}: {text: string}) => (
  <Box direction="horizontal">
    <Box paddingHorizontal="$2" paddingVertical="$3">
      <Circle
        backgroundColorKeyPath="primary.main"
        height={CIRCLE_SIZE}
        width={CIRCLE_SIZE}
      />
    </Box>
    <ShrinkedTypography>{text}</ShrinkedTypography>
  </Box>
);
