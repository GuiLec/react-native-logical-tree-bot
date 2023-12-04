# react-native-logical-tree-bot

React-native-logical-tree-bot is a versatile React Native package that seamlessly integrates a customizable chatbot component into your applications. Powered by a conditional tree logic, it delivers dynamic and contextually relevant responses based on user answers.

## Key Features:

- **Conditional Tree Logic:** Feed your chatbot with cases (logical nodes) and link them to next cases with a regex check on the user answer.
- **Intuitive Integration:** Use the power of React to seamlessly feed the logical cases to your Chatbot.
- **Customizable UI:** Tailor the look and feel of the chat interface to align with your application's design and branding.

<p align="center">
  <img src="https://github.com/GuiLec/react-native-logical-tree-bot/assets/39704115/13c9c701-6e1b-457b-9519-cd2b760e14de" alt="demo" />
</p>

Explore a new realm of user interaction and engagement with React-native-logical-tree-bot!

## Installation:

## Get Started:

```javascript
<Chatbot initialStepId="init">
  {/* Initial case */}
  <Chatbot.Case
    next={[{stepId: 'caseA', condition: /a/i}, {stepId: 'caseB'}]} // logic for the next step
    clickableAnswerOptions={['A', 'B']} // prepared clickable options (user can still use keyboard)
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

### Chatbot

| Props           | Type           | Description                                                                                   |
| --------------- | -------------- | --------------------------------------------------------------------------------------------- |
| `initialStepId` | string         | The id of the Case that will be the first step (using enum is recommended)                    |
| `children`      | Chatbot.Case[] | The cases define the content of the potential chatbot messages and the logic of their display |

### Chatbot.Case

| Props                               | Type                     | Description                                                                                          |
| ----------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                | string                   | Unique id of the case (using enum is recommended)                                                    |
| `clickableAnswerOptions` (optional) | string[]                 | List of prepared clickable answers                                                                   |
| `next` (optional)                   | {stepId:string           | null; condition: RegExp;}[]                                                                          | List of potential next steps identified whith the case id and conditioned with a regexp. The order of priority is descendent in the array (first has higher priority) |
| `children`                          | Chatbot.Case.Paragraph[] | Each paragraph represent the content of a bot message. The bot can send multiple paragraph in a case |

### Chatbot.Case.Paragraph

| Props      | Type              | Description                                                           |
| ---------- | ----------------- | --------------------------------------------------------------------- |
| `children` | React.JSX.Element | The content of the paragraph. It can be other than Text. Be creative! |

## Slightly more advanced example

You can a more developped example of rn-logical-treebot in [src/examples/Demo](src/examples/Demo/Demo.tsx) implementing the following decision tree (and we strongly encourage you to draw a decision tree before coding your logical tree bot):

<img width="755" alt="image" src="https://github.com/GuiLec/react-native-logical-tree-bot/assets/39704115/73dc1300-3a0a-4bb6-a4d5-511888fd1e62">
