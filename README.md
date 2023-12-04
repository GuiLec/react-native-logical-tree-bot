# react-native-logical-tree-bot

React-native-logical-tree-bot is a versatile React Native package that seamlessly integrates a customizable chatbot component into your applications. Powered by a conditional tree logic, it delivers dynamic and contextually relevant responses based on user answers.



## Key Features:
- **Conditional Tree Logic:** Feed your chatbot with cases (logical nodes) and link them to next cases with a regex check on the user answer.
- **Intuitive Integration:** Use the power of React to seamlessly feed the logical cases to your Chatbot.
- **Customizable UI:** Tailor the look and feel of the chat interface to align with your application's design and branding.

<p align="center">
  <img src="https://github.com/GuiLec/react-native-logical-tree-bot/assets/39704115/69ec66e8-cdfe-4bc8-914f-25d8f4970ec6" alt="demo" />
</p>

Explore a new realm of user interaction and engagement with React-native-logical-tree-bot!


## Installation:

## Get Started:

```javascript
      <Chatbot initialStepId="init">

        {/* Initial case */}
        <Chatbot.Case
          next={[{stepId: 'caseA', condition: /a/i}, {stepId: 'caseB'}]} // logic for the next step
          answerOptions={['A', 'B']} // prepared clickable options (user can still use keyboard) 
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
```

## API:

## More advanced example
