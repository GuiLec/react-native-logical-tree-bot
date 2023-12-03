import styled from '@emotion/native';
import {ThemeProvider} from '@emotion/react';
import {SafeAreaView} from 'react-native';
import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Box} from 'src/design-system/components/layout/box/Box';
import {theme} from 'src/design-system/theme/theme';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot';
import {Paragraph} from 'src/modules/chatbot/components/Paragraph';

export const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <Chatbot initialStepId="firstStep">
          <Chatbot.Case
            id="firstStep"
            answerOptions={[
              'Yes, please !',
              'I am fine, I already have a meal',
            ]}
            next={[
              {
                condition: /Yes/,
                stepId: 'thirdStep',
              },
              {
                stepId: 'secondStep',
              },
            ]}>
            <Paragraph>
              <Typography>{"Hi James 👋\nIt's almost lunch time!"}</Typography>
            </Paragraph>
            <Paragraph>
              <Typography>
                {
                  'May I suggest you a meal you can cook respecting your 1800 kcal daily goal?'
                }
              </Typography>
            </Paragraph>
          </Chatbot.Case>
          <Chatbot.Case
            id="secondStep"
            answerOptions={[
              'Excellent !',
              'Eurk, I don’t like it',
              'I don’t have all the ingredients',
            ]}
            next={[]}>
            <Paragraph>
              <Typography>
                {
                  "Ah, a delightful culinary challenge! Let's create a satisfying and nutritious meal that's around 400 calories!"
                }
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography>
                {'I suggest: a Light Veggie and Egg Salad !'}
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography>{"That's the ingredients list:"}</Typography>
            </Paragraph>
            <Paragraph>
              <Box>
                <BulletParagraph text="Eggs" />
                <BulletParagraph text="Avocado (for healthy fats and creaminess)" />
                <BulletParagraph text="Vegetables (let's assume a mix of leafy greens, tomatoes, cucumbers, and bell peppers)" />
                <BulletParagraph text="Lemon (for zest and juice)" />
                <BulletParagraph text="Mayonnaise (we'll use a small amount for creaminess)" />
                <BulletParagraph text="Olive oil (for the dressing)" />
              </Box>
            </Paragraph>
            <Paragraph>
              <Typography>{'Does it sound good to you?'}</Typography>
            </Paragraph>
          </Chatbot.Case>
          <Chatbot.Case
            id="thirdStep"
            answerOptions={['Hello']}
            next={[
              {
                stepId: 'secondStep',
              },
            ]}>
            <Paragraph>
              <Typography>{"Let's cook !"}</Typography>
            </Paragraph>
          </Chatbot.Case>
        </Chatbot>
      </StyledSafeAreaView>
    </ThemeProvider>
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
