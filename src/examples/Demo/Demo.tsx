import styled from '@emotion/native';
import {SafeAreaView} from 'react-native';
import {Ids} from './cases/ids';
import Chatbot from '../../../lib';
import {AndCanReadNoCase} from './cases/AndCanReadNoCase';
import {ButCanReadNoCase} from './cases/ButCanReadNoCase';
import {CanReadYesCase} from './cases/CanReadYesCase';
import {EnteredUnknownWordTwice} from './cases/EnteredUnknownWordTwice';
import {GoodGoForDrinkCase} from './cases/GoodGoForDrinkCase';
import {GoodbyeCase} from './cases/GoodbyeCase';
import {HateYouCase} from './cases/HateYouCase';
import {IntroCase} from './cases/IntroCase';
import {NotAQuestionCase} from './cases/NotAQuestionCase';
import {TryRNLogicalTreeBotCase} from './cases/TryRNLogicalTreeBotCase';
import {UnderstandDecisionTreesCase} from './cases/UnderstandDecisionTreesCase';
import {WhatCase} from './cases/WhatCase';

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
