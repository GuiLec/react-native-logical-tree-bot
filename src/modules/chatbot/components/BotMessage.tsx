import styled from '@emotion/native';
import {ReactNode, useEffect, useState} from 'react';
import {Box} from '../../../design-system/components/layout/box/Box';
import {Spacer} from '../../../design-system/components/layout/spacer/Spacer';
import {BotMessageItem} from './BotMessageItem';
import {Image, StyleSheet} from 'react-native';
import botImage from '../assets/botImage.png';

interface Props {
  paragraphs: ReactNode[];
  showChoiceButtons: () => void;
}

export const BotMessage = ({paragraphs, showChoiceButtons}: Props) => {
  const [localStep, setLocalStep] = useState<number>(0);
  useEffect(() => {
    paragraphs.forEach((_, index) => {
      setTimeout(
        () => {
          setLocalStep(i => i + 1);
        },
        1000 * (index + 1),
      );
    });
  }, [paragraphs]);
  return (
    <Box paddingRight="$20" direction="horizontal">
      <Circle alignSelf="flex-start" backgroundColorKeyPath="background.light">
        <Image style={styles.image} source={botImage} />
      </Circle>
      <Spacer direction="horizontal" gap="$2" />
      <ShrinkedBox>
        {paragraphs.map((paragraph, index) => (
          <BotMessageItem
            showChoiceButtons={showChoiceButtons}
            isNextMessage={localStep + 1 === index + 1}
            isMessageDisplayed={index + 1 <= localStep}
            key={index}
            isLastItem={index === paragraphs.length - 1}>
            {paragraph}
          </BotMessageItem>
        ))}
      </ShrinkedBox>
    </Box>
  );
};

const Circle = styled(Box)(() => ({
  borderRadius: 1_000_000,
}));

const ShrinkedBox = styled(Box)({
  flexShrink: 1,
});

const IMAGE_SIZE = 40;

const styles = StyleSheet.create({
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
});
