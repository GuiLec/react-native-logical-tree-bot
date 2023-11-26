import styled from '@emotion/native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {spacings} from '../../../design-system/theme/spacings';
import {Stack} from '../../../design-system/components/layout/stack/Stack';
import {Button} from '../../../design-system/components/general/button/Button';
import {Spacer} from '../../../design-system/components/layout/spacer/Spacer';
import {Box} from '../../../design-system/components/layout/box/Box';
import {theme} from '../../../design-system/theme/theme';

interface Props {
  answerOptions: string[];
  onChoicePress: (choice: string) => () => void;
  areChoiceButtonsVisible: boolean;
}

export const ChatbotFooter = ({
  answerOptions,
  onChoicePress,
  areChoiceButtonsVisible,
}: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container
        // @todo remove the insets.bottom when the keyboard is open
        bottomOffset={spacings['$2']}
        backgroundColorKeyPath="primary.veryPale"
        paddingTop="$4">
        {areChoiceButtonsVisible && (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              <Stack direction="horizontal" gap="$4">
                {answerOptions.map((answerOption, index) => (
                  <Button
                    onPress={onChoicePress(answerOption)}
                    key={index}
                    variant="inverted"
                    size="XS"
                    label={answerOption}
                  />
                ))}
              </Stack>
            </ScrollView>
            <Spacer gap="$2" />
          </>
        )}
        <Box alignItems="center" direction="horizontal" paddingHorizontal="$6">
          <TextInput placeholder="Ask me something..." />
          <Spacer direction="horizontal" gap="$2" />
          <Button size="XXS" icon="sendHorizontal" />
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled(Box)<{bottomOffset: number}>(({bottomOffset}) => ({
  paddingBottom: bottomOffset,
}));

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: theme.spacings.$6,
  },
});

const TextInput = styled.TextInput(({theme}) => ({
  backgroundColor: theme.colors.background.light,
  paddingHorizontal: theme.spacings.$4,
  paddingVertical: theme.spacings.$2,
  color: theme.colors.primary.main,
  ...theme.typography.body.regular,
  borderRadius: theme.borderRadius.$2,
  width: '100%',
  flexShrink: 1,
}));
