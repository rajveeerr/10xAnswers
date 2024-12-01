// @ts-ignore

export { default as ChatBot } from './components/chatBot'
export { default as ChatArea } from './components/chatArea'
export { default as Heading } from './components/heading'
export { default as InputArea } from './components/inputArea'
export { default as OnlineIndicator } from './components/onlineIndicator'
export { default as Questions } from './components/questions'
export { default as AnswerComponent } from './components/answerComponent'

export { allChats } from './store/atoms/allChats'
export { answerFamily } from './store/atoms/answerFamily'
export { questionFamily } from './store/atoms/questionFamily'
export { chatBotAttributes } from './store/atoms/attributesData'
export { chatWindowState } from './store/atoms/chatWindowState'

export { getAssetPath } from './utils/getAssetPath'

export { default as useOnline } from './hooks/useOnline'