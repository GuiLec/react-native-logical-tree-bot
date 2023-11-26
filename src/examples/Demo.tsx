import styled from '@emotion/native';
import {ThemeProvider} from '@emotion/react';
import {SafeAreaView} from 'react-native';
import {theme} from 'src/design-system/theme/theme';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot';
import {chatBotSteps} from 'src/modules/chatbot/domain/chatbot.fixture';

export const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeAreaView>
        <Chatbot chatBotSteps={chatBotSteps} />
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});
