import styled from '@emotion/native';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Box} from '../../../design-system/components/layout/box/Box';

const firstStepAnswerOptions = [
  'Yes, please !',
  'I am fine, I already have a meal',
];

const firstStep = {
  paragraphs: [
    <Typography key={0}>
      <Typography>{'Hi James '}</Typography>
      {"👋\nIt's almost "}
      <Typography>{'lunch time'}</Typography>
      {'!'}
    </Typography>,
    <Typography key={1}>
      {'May I suggest you a meal you can cook respecting your '}
      <Typography>{'1800 kcal'}</Typography>
      {' daily goal?'}
    </Typography>,
  ],
  answerOptions: firstStepAnswerOptions,
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

const secondtStep = {
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
  answerOptions: secondStepAnswerOptions,
};

const ThirdStep = () => {
  return <Typography key={0}>{"Let's cook !"}</Typography>;
};

const thirdStep = {
  paragraphs: [<ThirdStep key={0} />],
  answerOptions: [],
};

export const chatBotSteps = {
  firstStep,
  secondtStep,
  thirdStep,
};
