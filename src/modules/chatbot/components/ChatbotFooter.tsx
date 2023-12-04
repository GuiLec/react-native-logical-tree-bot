import styled from '@emotion/native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Stack} from '../../../design-system/components/layout/stack/Stack';
import {Button} from '../../../design-system/components/general/button/Button';
import {Spacer} from '../../../design-system/components/layout/spacer/Spacer';
import {Box} from '../../../design-system/components/layout/box/Box';
import {theme} from '../../../design-system/theme/theme';
import {Eventuality} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';
import {getNextCaseIdFromEventualities} from 'src/modules/chatbot/domain/utils/getNextCaseIdFromEventualities';
import {useState} from 'react';

interface Props {
  answerOptions: string[];
  onChoicePress: (params: {
    choice: string;
    nextCaseId: string | null;
  }) => () => void;
  areChoiceButtonsVisible: boolean;
  nextEventualities: Eventuality[];
}

export const ChatbotFooter = ({
  answerOptions,
  onChoicePress,
  areChoiceButtonsVisible,
  nextEventualities,
}: Props) => {
  const [inputText, setInputText] = useState<string | undefined>(undefined);
  const onInputChange = (text: string) => setInputText(text);

  const onChoseOption = (answer: string) =>
    onChoicePress({
      choice: answer,
      nextCaseId: getNextCaseIdFromEventualities({
        eventualities: nextEventualities,
        choice: answer,
      }),
    });

  const onSendButtonPress = () => {
    if (inputText) {
      onChoseOption(inputText)();
      setInputText(undefined);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Box
        paddingBottom="$2"
        backgroundColorKeyPath="primary.veryPale"
        paddingTop="$4">
        {areChoiceButtonsVisible && answerOptions.length > 0 && (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              <Stack direction="horizontal" gap="$4">
                {answerOptions.map((answerOption, index) => (
                  <Button
                    onPress={onChoseOption(answerOption)}
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
          <TextInput
            onChangeText={onInputChange}
            value={inputText}
            placeholder="Ask me something..."
          />
          <Spacer direction="horizontal" gap="$2" />
          <Button
            onPress={onSendButtonPress}
            isDisabled={!inputText}
            size="XXS"
            icon="sendHorizontal"
          />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

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
