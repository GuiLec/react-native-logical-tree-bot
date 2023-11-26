import {useRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import styled from '@emotion/native';
import {useChatbotAnswers} from 'src/modules/chatbot/domain/hooks/useChatbotAnswers';
import {Box} from 'src/design-system/components/layout/box/Box';
import {Stack} from 'src/design-system/components/layout/stack/Stack';
import {ChatbotFooter} from 'src/modules/chatbot/components/ChatbotFooter';
import {ChatBotCase} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';
import {DialogStep} from 'src/modules/chatbot/components/DialogStep';

interface Props {
  chatBotCases: ChatBotCase[];
  initialStepId: string;
}

export const Chatbot = ({chatBotCases, initialStepId}: Props) => {
  const {answerOptions, onAnswer, chatSteps, nextChatBotCaseId} =
    useChatbotAnswers({
      chatBotCases,
      initialStepId,
    });

  const [areChoiceButtonsVisible, setAreChoiceButtonsVisible] =
    useState<boolean>(false);

  const hideChoiceButtons = () => setAreChoiceButtonsVisible(false);
  const showChoiceButtons = () => setAreChoiceButtonsVisible(true);

  const onChoicePress =
    (params: {choice: string; nextCaseId: string | null}) => () => {
      onAnswer(params);
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
            {chatSteps.map((step, index) => {
              const chatBotCase = chatBotCases.find(
                caseItem => caseItem.id === step.caseId,
              );
              if (!chatBotCase) return null;
              return (
                <DialogStep
                  key={index}
                  showChoiceButtons={showChoiceButtons}
                  paragraphs={chatBotCase.paragraphs}
                  answer={step.answer}
                />
              );
            })}
          </Stack>
        </Box>
      </ScrollView>
      <ChatbotFooter
        areChoiceButtonsVisible={areChoiceButtonsVisible}
        onChoicePress={onChoicePress}
        answerOptions={answerOptions}
        nextChatBotCaseId={nextChatBotCaseId}
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
