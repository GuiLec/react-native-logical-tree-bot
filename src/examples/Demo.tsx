import styled from '@emotion/native';
import {ThemeProvider} from '@emotion/react';
import {SafeAreaView} from 'react-native';
import {theme} from 'src/design-system/theme/theme';
import {Case} from 'src/modules/chatbot/components/Case';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot';
import {chatBotCases} from 'src/modules/chatbot/domain/chatbot.fixture';

export const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <Chatbot initialStepId="firstStep">
          <Case {...chatBotCases[0]!} />
          <Case {...chatBotCases[1]!} />
          <Case {...chatBotCases[2]!} />
        </Chatbot>
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});
