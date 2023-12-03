import styled from '@emotion/native';
import {ThemeProvider} from '@emotion/react';
import {SafeAreaView} from 'react-native';
import {theme} from 'src/design-system/theme/theme';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot';
import {chatBotCases} from 'src/modules/chatbot/domain/chatbot.fixture';

export const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <Chatbot initialStepId="firstStep">
          <Chatbot.Case {...chatBotCases[0]!} />
          <Chatbot.Case {...chatBotCases[1]!} />
          <Chatbot.Case {...chatBotCases[2]!} />
        </Chatbot>
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});
