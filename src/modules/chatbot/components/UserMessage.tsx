import styled from '@emotion/native';
import {Image, StyleSheet} from 'react-native';
import userProfileImage from '../assets/userProfileImage.png';
import {Box} from '../../../design-system/components/layout/box/Box';
import {Stack} from '../../../design-system/components/layout/stack/Stack';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Spacer} from '../../../design-system/components/layout/spacer/Spacer';

export const UserMessage = ({text}: {text: string}) => {
  return (
    <Box paddingLeft="$20" direction="horizontal" justifyContent="flex-end">
      <Stack gap="$2">
        <RoundedBox backgroundColorKeyPath="primary.main" padding="$2">
          <Typography color="primary.contrastText">{text}</Typography>
        </RoundedBox>
      </Stack>
      <Spacer direction="horizontal" gap="$2" />
      <Circle height={40} width={40}>
        <Image style={styles.image} source={userProfileImage} />
      </Circle>
    </Box>
  );
};

const Circle = styled(Box)(() => ({
  borderRadius: 1_000_000,
  overflow: 'hidden',
}));

const RoundedBox = styled(Box)(({theme}) => ({
  borderRadius: theme.borderRadius.$2,
}));

const IMAGE_SIZE = 40;

const styles = StyleSheet.create({
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
});
