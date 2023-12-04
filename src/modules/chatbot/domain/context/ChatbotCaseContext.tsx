/* eslint-disable unused-imports/no-unused-vars */
import {createContext, useContext} from 'react';
import {ChatBotCase} from 'src/modules/chatbot/domain/types/ChatBotCase.interface';

const SetChatbotCaseContext = createContext<
  (
    chatBotCases:
      | ChatBotCase[]
      | ((chatBotCases: ChatBotCase[]) => ChatBotCase[]),
  ) => void
>(() => {
  console.error('You forgot to set the Chatbot cases context');
});

export const ChatbotCaseContextProvider = SetChatbotCaseContext.Provider;

export const useSetChatbotCaseContext = () => {
  const context = useContext(SetChatbotCaseContext);

  return context;
};
