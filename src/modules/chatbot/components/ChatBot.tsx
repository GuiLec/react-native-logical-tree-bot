import {useRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import styled from '@emotion/native';
import {useChatbotAnswers} from 'src/modules/chatbot/domain/hooks/useChatbotAnswers';
import {Box} from 'src/design-system/components/layout/box/Box';
import {Stack} from 'src/design-system/components/layout/stack/Stack';
import {DialogStep} from 'src/modules/chatbot/components/DialogStep';
import {chatBotSteps} from 'src/modules/chatbot/domain/chatbot.fixture';
import {ChatbotFooter} from 'src/modules/chatbot/components/ChatbotFooter';

export type ChatbotRouteParams = undefined;

// The whole content of this screen is hard-coded and is only meant for demo purposes.

export const Chatbot = () => {
  const {nextAnswerOptions, onAnswer, answers} = useChatbotAnswers();

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
