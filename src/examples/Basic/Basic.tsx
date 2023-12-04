import styled from '@emotion/native';
import {SafeAreaView, Text} from 'react-native';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const Basic = () => {
  return (
    <StyledSafeAreaView>
      <Chatbot initialStepId="init">
        {/* Initial case */}
        <Chatbot.Case
          next={[{stepId: 'caseA', condition: /a/i}, {stepId: 'caseB'}]}
          clickableAnswerOptions={['A', 'B']}
          id="init">
          <Chatbot.Case.Paragraph>
            <Text>First pagraph</Text>
          </Chatbot.Case.Paragraph>
          <Chatbot.Case.Paragraph>
            <Text>Second pagraph</Text>
          </Chatbot.Case.Paragraph>
        </Chatbot.Case>
        {/* Case A */}
        <Chatbot.Case id="caseA">
          <Chatbot.Case.Paragraph>
            <Text>Chose A</Text>
          </Chatbot.Case.Paragraph>
        </Chatbot.Case>
        {/* Case B */}
        <Chatbot.Case id="caseB">
          <Chatbot.Case.Paragraph>
            <Text>Chose B</Text>
          </Chatbot.Case.Paragraph>
        </Chatbot.Case>
      </Chatbot>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});
