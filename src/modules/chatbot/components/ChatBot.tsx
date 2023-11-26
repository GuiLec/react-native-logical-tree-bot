import {useRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import styled from '@emotion/native';
import {useChatbotAnswers} from 'src/modules/chatbot/domain/hooks/useChatbotAnswers';
import {Box} from 'src/design-system/components/layout/box/Box';
import {Stack} from 'src/design-system/components/layout/stack/Stack';
import {DialogStep} from 'src/modules/chatbot/components/DialogStep';
import {ChatbotFooter} from 'src/modules/chatbot/components/ChatbotFooter';
import {ChatBotStep} from 'src/modules/chatbot/domain/types/ChatBotStep.interface';

interface Props {
  chatBotSteps: ChatBotStep[];
}

export const Chatbot = ({chatBotSteps}: Props) => {
  const {nextAnswerOptions, onAnswer, answers} = useChatbotAnswers({
    chatBotSteps,
  });

  const [areChoiceButtonsVisible, setAreChoiceButtonsVisible] =
    useState<boolean>(false);

  const hideChoiceButtons = () => setAreChoiceButtonsVisible(false);
  const showChoiceButtons = () => setAreChoiceButtonsVisible(true);

  const onChoicePress = (choice: string) => () => {
    onAnswer(choice);
    hideChoiceButtons();
  };

  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <StyledSafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={
          () => scrollViewRef.current?.scrollToEnd({animated: true}) // we want to always show the end of the scrollview
        }
        contentContainerStyle={styles.contentContainer}>
        <Box padding="$6">
          <Stack gap="$4">
            {chatBotSteps.map((step, index) => {
              if (index > answers.length) return null;
              return (
                <DialogStep
                  key={index}
                  showChoiceButtons={showChoiceButtons}
                  paragraphs={step.paragraphs}
                  answer={answers[index] || null}
                />
              );
            })}
          </Stack>
        </Box>
      </ScrollView>
      <ChatbotFooter
        areChoiceButtonsVisible={areChoiceButtonsVisible}
        onChoicePress={onChoicePress}
        answerOptions={nextAnswerOptions}
      />
    </StyledSafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {flexGrow: 1},
});

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: 'white',
});
