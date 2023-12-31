import styled from '@emotion/native';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Box} from '../../../design-system/components/layout/box/Box';
import {ChatBotCase} from './types/ChatBotCase.interface';

const firstStepAnswerOptions = [
  'Yes, please !',
  'I am fine, I already have a meal',
];

const firstStep: ChatBotCase = {
  id: 'firstStep',
  paragraphs: [
    <Typography key={0}>{"Hi James 👋\nIt's almost lunch time!"}</Typography>,
    <Typography key={1}>
      {
        'May I suggest you a meal you can cook respecting your 1800 kcal daily goal?'
      }
    </Typography>,
  ],
  clickableAnswerOptions: firstStepAnswerOptions,
  next: [
    {
      condition: /Yes/,
      stepId: 'thirdStep',
    },
    {
      stepId: 'secondStep',
    },
  ],
};

const secondStepAnswerOptions = [
  'Excellent !',
  'Eurk, I don’t like it',
  'I don’t have all the ingredients',
];

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

const secondtStep: ChatBotCase = {
  id: 'secondStep',
  paragraphs: [
    <Typography key={0}>
      {
        "Ah, a delightful culinary challenge! Let's create a satisfying and nutritious meal that's around 400 calories!"
      }
    </Typography>,
    <Typography key={1}>
      {'I suggest: a Light Veggie and Egg Salad !'}
    </Typography>,
    <Typography key={1}>{"That's the ingredients list:"}</Typography>,
    <Box key={2}>
      <BulletParagraph text="Eggs" />
      <BulletParagraph text="Avocado (for healthy fats and creaminess)" />
      <BulletParagraph text="Vegetables (let's assume a mix of leafy greens, tomatoes, cucumbers, and bell peppers)" />
      <BulletParagraph text="Lemon (for zest and juice)" />
      <BulletParagraph text="Mayonnaise (we'll use a small amount for creaminess)" />
      <BulletParagraph text="Olive oil (for the dressing)" />
    </Box>,
    <Typography key={3}>{'Does it sound good to you?'}</Typography>,
  ],
  clickableAnswerOptions: secondStepAnswerOptions,
  next: [],
};

const ThirdStep = () => {
  return <Typography key={0}>{"Let's cook !"}</Typography>;
};

const thirdStep: ChatBotCase = {
  id: 'thirdStep',
  paragraphs: [<ThirdStep key={0} />],
  clickableAnswerOptions: ['Hello'],
  next: [
    {
      stepId: 'secondStep',
    },
  ],
};

export const chatBotCases: ChatBotCase[] = [firstStep, secondtStep, thirdStep];
