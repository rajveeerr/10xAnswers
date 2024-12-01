# 10xAnswers: ChatBot Component

Welcome to **10xAnswers**, a fully customizable and draggable chatbot component built with React and Recoil. This package is designed to help you integrate an intelligent chatbot into your project effortlessly, eliminating the need to create one from scratch. With support for markdown rendering, draggable components, customizable prompts, and state management, **10xAnswers** is your go-to solution for chatbot integration.

[![npm version](https://badge.fury.io/js/10xanswers.svg)](https://badge.fury.io/js/10xanswers)
[![License](https://img.shields.io/npm/l/10xanswers.svg)](https://github.com/yourusername/10xanswers/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/10xanswers.svg)](https://www.npmjs.com/package/10xanswers)

![10xAnswers Banner](https://github.com/user-attachments/assets/64a70341-2631-4b94-a7b7-35b71f2d6363)


# Table of Contents

1. [Introduction](#introduction)  
2. [Demo](#demo)  
3. [Features](#features)  
4. [Installation](#installation)  
5. [Quick Example](#quick-example)  
6. [Props](#props)  
   - [Basic Props](#basic-props)  
   - [Styling Props](#styling-props)  
7. [Advanced Usage](#advanced-usage)  
8. [All Props](#all-props)  
   - [Props Overview](#props-overview)  
9. [Prompt Guidelines](#prompt-guidelines)  
   - [Default Prompt](#default-prompt)  
   - [Custom Prompt](#custom-prompt)  
10. [Gemini API Integration](#gemini-api-integration)  
11. [Backend Integration](#backend-integration)  
    - [URL-based Integration](#url-based-integration)  
12. [Warnings and Important Notes](#warning-and-important-notes)  
13. [Screenshots](#screenshots)
14. [Upcoming Features](#upcoming-features)  
15. [Author](#author)  
16. [Contribution and Support](#contribution-and-support)  

## Demo

[Live Demo Link - Coming Soon]

## Features

- **Plug-and-Play**: Simple to install and use.
- **Customizable**: Style the chat window, bot icon, and entire chat component as per your needs.
- **Markdown Support**: Renders code snippets, tables, and more.
- **State Optimization**: Built using React and Recoil for efficient state management.
- **Connectivity Check**: Includes a custom hook to display internet connectivity status.
- **Draggable UI**: Make the chatbot draggable for flexible placement.
- **Backend Support**: Option to use your backend or provided URL for response generation.
- **Open Source**: Fully accessible codebase for contributions and enhancements.

## Installation

```bash
npm install 10xanswers
# or
yarn add 10xanswers
# or
pnpm add 10xanswers
```

## Quick Example

```jsx
import React from 'react';
import { ChatBot } from '10xanswers';

function App() {
  return (
    <ChatBot 
      backendUrl="https://ask-10x-questions.vercel.app/"
      draggable={true}
    />
  );
}

export default App;
```

**Important**: The provided URL `https://ask-10x-questions.vercel.app/` is a pre-configured backend that works seamlessly with the 10xAnswers component. 

## Props

### Basic Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backendUrl` | `string` | - | Backend URL for chat processing, required |
| `geminiApi` | `string` | - | Gemini API key for direct integration if no backend availaible(not recommended)|
| `title` | `string` | "10xAnswers" | Chat window title |
| `draggable` | `boolean` | `false` | Enable/disable dragging |
| `startOpen` | `boolean` | `false` | Initial chat window state(open/colsed) |

### Styling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `chatWindowStyle` | `object` | `{}` | Inline styles for chat window |
| `chatBotIconStyle` | `object` | `{}` | Inline styles for bot icon |
| `chatComponentStyle` | `object` | `{}` | Inline styles for chat component |

## Advanced Usage

```jsx
<ChatBot 
  backendUrl="https://ask-10x-questions.vercel.app/"
  title="100xQuestions"
  stylizeTitle={{emphasized:"100x",normal:"Questions"}}//optional
  botIcon="./logoImg2.jpg"
  userIcon="./logoImg.jpg"
  draggable={true}
  x={500}
  y={625}
  prompt="You're and artisted turned developer, not respond accordingly"
  description="AI-powered conversational assistant"
  cta="Start Asking"
  startOpen={true}
/>
```

## All Props

### Props

| Prop Name              | Type     | Description                                                                                     |
|------------------------|----------|-------------------------------------------------------------------------------------------------|
| `chatWindowStyle`      | Object   | Inline CSS for chat window styling.                                                            |
| `chatBotIconStyle`     | Object   | Inline CSS for bot icon styling.                                                               |
| `chatComponentStyle`   | Object   | Inline CSS for overall chat component styling.                                                 |
| `chatWindowClassName`  | String   | Tailwind classes for chat window styling.                                                      |
| `chatBotIconClassName` | String   | Tailwind classes for bot icon styling.                                                         |
| `backendUrl`           | String   | **Required** if no Gemini API is provided. URL for backend to process requests.                |
| `title`                | String   | Custom title for the chatbot window.                                                           |
| `botIcon`              | String   | Path to the bot icon image.                                                                    |
| `userIcon`             | String   | Path to the user icon image.                                                                   |
| `stylizeTitle`         | Object   | Object with `emphasized` and `normal` strings to style the title.                              |
| `prompt`               | String   | Custom prompt for the chatbot. Use `"none"` for no prompting.                                  |
| `geminiApi`            | String   | Required if no `backendUrl` is provided.                                                      |
| `theme`                | String   | Theme for the chatbot (currently not implemented).                                             |
| `draggable`            | Boolean  | Enable or disable draggable functionality.                                                     |
| `x`                    | Number   | Initial x-position for draggable mode.                                                        |
| `y`                    | Number   | Initial y-position for draggable mode.                                                        |
| `description`          | String   | Description text for the chatbot.                                                             |
| `cta`                  | String   | Call-to-action text for the chatbot button.                                                   |
| `startOpen`            | Boolean  | Whether the chatbot window starts open (`true`) or closed (`false`).                          |

---


### Prompt Guidelines

- **With `prompt`**: If a custom prompt is provided, it will be sent along with the user question.  
- **Without `prompt`**: If `prompt` is set to `"none"`, only the user question with no prompt is sent to the ai model- not recommended.  

---

### Example Prompts

**Default Prompt**:  
If no prompt is provided, default prompt will be sent to the model along with the questions asked by client
```text
You are 10xAnswers, an intelligent and highly versatile chatbot. Your purpose is to assist users with precision, accuracy, and clarity...
```

**Custom Prompt**: 
You can specify your custom prompts here, every question of client will be sentto model along with this prompt 
```text
User is sending a custom prompt about behavior. Prompt: ${prompt}. Question: ${question}. History: ${chatHistory}.
```

---


### Gemini API Integration
If you don't have a working backend you can directly use Google's Gemini API and pass it in the props, and send requests to the gemini
directly from frontend. Not recommended as this exposes the api key to the users of your web app.


## Backend Integration

### URL-based Integration
POST requests are sent to backend with the following payload:

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

## Warning and Important Notes

**Development Caution**: 
- After changing any prop of the chat component, changes will only be visible after reloading.
- Exposing Gemini API key directly in frontend is NOT recommended as it exposes your key to users.

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/829e3679-caaa-475f-8220-c301cf21af71" alt="Screenshot 1" style="width: 49%; border-radius: 8px;">
  <img src="https://github.com/user-attachments/assets/e02046e1-bb25-4488-aae9-6e30ee1140a0" alt="Screenshot 2" style="width: 45%; border-radius: 8px;">
  <img src="https://github.com/user-attachments/assets/575fdab5-3f65-4b84-aaf1-a9317a73dfe0" alt="Screenshot 3" style="width: 45%; border-radius: 8px;">
  <img src="https://github.com/user-attachments/assets/dd6b8032-3347-48ca-b7b8-efdf05e9e30a" alt="Screenshot 4" style="width: 45%; border-radius: 8px;">
</div>


## Upcoming Features

- [ ] Media message support
- [ ] Voice interaction modes
- [ ] Additional themes
- [ ] Enhanced customization options

## Author

Rajveer Singh
- Twitter: [@rajveeerrsingh](https://x.com/rajveeerrsingh)


## Contribution and Support

- Open-source contributions welcome
- Contact on:
  - X (Twitter): https://x.com/RajveeerrSingh
  - GitHub: https://github.com/rajveeerr

Found an issue? [Open a GitHub Issue](https://github.com/yourusername/10xanswers/issues)

Enjoying 10xAnswers? Consider starring the repository! ⭐


---

Start building smarter projects with **10xAnswers** today! 🚀
