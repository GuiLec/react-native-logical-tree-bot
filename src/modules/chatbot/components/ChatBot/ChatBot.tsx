import {ThemeProvider} from '@emotion/react';
import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Stack} from '../../../../design-system/components/layout/stack/Stack';
import {theme} from '../../../../design-system/theme/theme';
import {ChatbotCaseContextProvider} from '../../domain/context/ChatbotCaseContext';
import {useChatbotAnswers} from '../../domain/hooks/useChatbotAnswers';
import {ChatBotCase} from '../../domain/types/ChatBotCase.interface';
import {CaseProps, Case} from '../Case/Case';
import {ChatbotFooter} from '../ChatbotFooter';
import {DialogStep} from '../DialogStep';
import {Box} from '../../../../design-system/components/layout/box/Box';

interface Props {
  children: React.ReactElement<CaseProps> | React.ReactElement<CaseProps>[];
  initialStepId: string;
}

export const Chatbot = ({initialStepId, children}: Props) => {
  const [chatBotCases, setChatBotCases] = useState<ChatBotCase[]>([]);

  const {clickableAnswerOptions, onAnswer, chatSteps, nextEventualities} =
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
    <ChatbotCaseContextProvider value={setChatBotCases}>
      <ThemeProvider theme={theme}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={
            () => scrollViewRef.current?.scrollToEnd({animated: true}) // we want to always show the end of the scrollview
          }
          contentContainerStyle={styles.contentContainer}>
          {children}
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
          clickableAnswerOptions={clickableAnswerOptions}
          nextEventualities={nextEventualities}
        />
      </ThemeProvider>
    </ChatbotCaseContextProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {flexGrow: 1},
});

Chatbot.Case = Case;
