import { atomFamily, selectorFamily, useRecoilValue } from 'recoil'
import { chatBotAttributes } from './attributesData';

let historyPrompts=[]

export let answerFamily=atomFamily({
  key:"answerFamily",
  default: selectorFamily({
    key: "fetchAnswers",
    get: ({id,question})=>{
      
      return async({get})=>{
        historyPrompts.push(question)
        let {backendUrl,geminiApi,prompt,botIcon}=get(chatBotAttributes)
        let url=backendUrl||"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+geminiApi;
        let questionOrPrompt;
  
        if (backendUrl) {
          questionOrPrompt = question;
        } 
        else if (prompt && geminiApi) {
          questionOrPrompt = prompt + " The history of chats are: " + historyPrompts;
        } 
        else if (!prompt && geminiApi) {
          questionOrPrompt = `You are a highly intelligent senior developer assisting the user with programming-related questions. Below is the context of the user's past queries and your responses, followed by the user's current question. 
          History of User Questions and Context: ${historyPrompts} 
          Current Question: ${question}.
          Respond directly and concisely based on the history. If the history is empty that means this is the first question, keep that in mind, also don't let the end-user know about this history thing. Send data in markdown format wherever required or necessary like code or something.`;
        } 
        else {
          questionOrPrompt = "Please provide gemini api";
        }

        let response=await fetch(url,{
          method: "POST",
          body: JSON.stringify({
            "contents": [{
            "parts":[{"text": questionOrPrompt}]
            }]
          })
        })

        let data=await response.json()
        return {
            id,
            question,
            userIcon:botIcon||'./logoImg2.jpg',
            answer:data.candidates[0].content.parts[0].text
        }
      }
    }
  })
})