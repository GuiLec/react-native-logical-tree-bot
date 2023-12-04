import styled from '@emotion/native';
import {SafeAreaView} from 'react-native';
import {AndCanReadNoCase} from 'src/examples/Demo/cases/AndCanReadNoCase';
import {ButCanReadNoCase} from 'src/examples/Demo/cases/ButCanReadNoCase';
import {CanReadYesCase} from 'src/examples/Demo/cases/CanReadYesCase';
import {EnteredUnknownWordTwice} from 'src/examples/Demo/cases/EnteredUnknownWordTwice';
import {GoodGoForDrinkCase} from 'src/examples/Demo/cases/GoodGoForDrinkCase';
import {GoodbyeCase} from 'src/examples/Demo/cases/GoodbyeCase';
import {HateYouCase} from 'src/examples/Demo/cases/HateYouCase';
import {IntroCase} from 'src/examples/Demo/cases/IntroCase';
import {NotAQuestionCase} from 'src/examples/Demo/cases/NotAQuestionCase';
import {TryRNLogicalTreeBotCase} from 'src/examples/Demo/cases/TryRNLogicalTreeBotCase';
import {UnderstandDecisionTreesCase} from 'src/examples/Demo/cases/UnderstandDecisionTreesCase';
import {WhatCase} from 'src/examples/Demo/cases/WhatCase';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const Demo = () => {
  return (
    <StyledSafeAreaView>
      <Chatbot initialStepId={Ids.intro}>
        <IntroCase />
        <GoodbyeCase />
        <UnderstandDecisionTreesCase />
        <GoodGoForDrinkCase />
        <TryRNLogicalTreeBotCase />
        <CanReadYesCase />
        <AndCanReadNoCase />
        <ButCanReadNoCase />
        <EnteredUnknownWordTwice />
        <HateYouCase />
        <WhatCase />
        <NotAQuestionCase />
      </Chatbot>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});
