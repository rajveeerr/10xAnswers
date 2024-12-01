# 10xAnswers Chatbot Component

## Table of Contents
1. [Installation](#installation)
2. [Basic Import and Usage](#basic-import-and-usage)
3. [Comprehensive Props and Configuration](#comprehensive-props-and-configuration)
4. [Warning and Important Notes](#warning-and-important-notes)
5. [Backend Request Format](#backend-request-format)
6. [Prompt Management Strategies](#prompt-management-strategies)
7. [Integration Strategies](#integration-strategies)
8. [Upcoming Features](#upcoming-features)
9. [Contribution and Support](#contribution-and-support)

## Installation

```bash
npm i 10xanswers
```

## Basic Import and Usage

```jsx
import { ChatBot } from '10xanswers';

<ChatBot 
  backendUrl="https://ask-10x-questions.vercel.app/"
/>
```
🚨 **Important**: The provided URL `https://ask-10x-questions.vercel.app/` is a pre-configured backend that works seamlessly with the 10xAnswers component. 

## Comprehensive Props and Configuration

### Core Props Breakdown

#### Backend Integration
- `backendUrl` (string): Backend endpoint for chat processing
  - Required 
  - POST request will be sent to this URL

- `geminiApi` (string): Gemini API key for direct frontend integration
  - Not recommended for direct exposure
  - Fallback option if no backend URL

- `prompt` (string):
  - Can be "none" or a custom prompt
  - If "none", question will directly be sent without adding any prompt to it, not recommended unless trying to create your own backend with custom prompting and chat history. 
  - Custom prompts allow precise chatbot behavior definition

#### Positioning and Draggability
- `draggable` (boolean): 
  - `false` (default): Absolute positioning
  - `true`: Component becomes draggable

- `x` (number): Initial X position of component when draggable
- `y` (number): Initial Y position of component when draggable

#### Customization Props
- `title` (string): Custom chat window title
- `botIcon` (string): Path to bot icon image
- `userIcon` (string): Path to user icon image
- `description` (string): A short description text about ChatBot to display below the title
- `cta` (string): Call-to-action button text
- `startOpen` (boolean): Initial chat window state(open/close)

#### Styling Props
Three main div structure for styling:
```html
<div chatComponent>
  <div chatWindow></div>
  <div chatBotIcon></div>
</div>
``` 

Styling can be applied via:
- Inline styles
- Tailwind classes
- Custom CSS

##### Styling Props Details
- `chatWindowStyle`: Inline styles for chat window
- `chatBotIconStyle`: Inline styles for bot icon
- `chatComponentStyle`: Inline styles for entire component

- `chatWindowClassName`: Tailwind classes for chat window
- `chatBotIconClassName`: Tailwind classes for bot icon
- `chatComponentClassName`: Tailwind classes for chat component

#### Title Styling
For correct behavior of title styling, title is required

- `stylizeTitle` (object):
  ```jsx
  stylizeTitle={{
    emphasized: "100x",
    normal: "Questions"
  }}
  ```


## Warning and Important Notes

⚠️ **Development Caution**: 
- After changing any prop of the chat component, changes will only be visible after reloading.
- Exposing Gemini API key directly in frontend is NOT recommended as it exposes your key to users.

## Backend Request Format

### Payload Structure
```json
{
  "method": "POST",
  "body": {
    "contents": [{
      "parts": [{"text": "User question"}]
    }]
  }
}
```

## Prompt Management Strategies

### Default Behavior
If no custom prompt:
- Default prompt will be sent along with the question
- Context-aware response generation

### Default Prompt Example
```
You are 10xAnswers, an intelligent chatbot...
Guidelines:
1. Be concise
2. Use markdown
3. Provide comprehensive answers

Current Question: ${question}
History: ${chatHistory}
```

## Integration Strategies

### Backend URL Integration
1. Provide backend URL, if you dont have one hit this backend instead "https://ask-10x-questions.vercel.app/"
2. Set `prompt` to "none" or add custom prompt
3. Provided Backend will handle chat logic bot of the box

### Gemini API Direct Integration
Not Recommended
1. Provide Gemini API key
2. Set custom or default prompt
3. Frontend processes chat directly

## Advanced Configuration Example

```jsx
<ChatBot 
  chatWindowStyle={{}}
  chatBotIconStyle={{}}
  chatComponentStyle={{
    position: "absolute", 
    right: 0, 
    bottom: 0, 
    margin: "1rem"
  }}
  backendUrl="https://your-backend.com"
  geminiApi={import.meta.env.VITE_GEMINI_API}
  title="10xAnswers"
  prompt="Custom intelligent behavior prompt"
  draggable={true}
  x={500}
  y={625}
/>
```

## Upcoming Features
- Media message support
- Voice interaction modes
- Enhanced theming

## Contribution and Support

- Open-source contributions welcome
- Contact on:
  - X (Twitter): https://x.com/RajveeerrSingh
  - GitHub: https://github.com/rajveeerr
