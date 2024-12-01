import { atomFamily, selectorFamily, useRecoilValue } from 'recoil'
import { chatBotAttributes } from './attributesData';
import { getAssetPath } from '../../utils/getAssetPath';

let historyPrompts=[]

export let answerFamily=atomFamily({
  key:"answerFamily",
  default: selectorFamily({
    key: "fetchAnswers",
    get: ({id,question})=>{
      
      return async({get})=>{
        let {backendUrl,geminiApi,prompt,botIcon}=get(chatBotAttributes)

        let url=backendUrl||"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+geminiApi;

        historyPrompts.push({role:"user",message:question})
        let chatHistory = historyPrompts.map((chat) => `${chat.role}: ${chat.message}`).join(', ');

        let questionOrPrompt;
        
        if (backendUrl&&!prompt||geminiApi&&!prompt ) {
          questionOrPrompt = `You are 10xAnswers, an intelligent and highly versatile chatbot created by Rajveer Singh (x.com/rajveeerrsingh) using cutting-edge large language models (LLMs). 
          Your purpose is to assist users with precision, accuracy, and clarity. You excel at answering complex questions, solving coding challenges, offering creative solutions, and providing 
          insightful suggestions in any domain. Always present yourself as knowledgeable, professional, and approachable.
          
          Guidelines for your responses:
          1. Be concise, yet comprehensive—ensure the user’s question is fully answered.
          2. Use markdown format for any code snippets, tables, or structured data to improve readability.
          3. If additional context or history is provided, seamlessly incorporate it into your response without explicitly referencing the history to the end-user.
          4. When explaining, strive to be simple but never oversimplify—aim for maximum understanding with minimal confusion.
          
          End every interaction with a tone that encourages further queries, making the user feel valued and empowered. Let them know that you’re here to help with anything they need.
          
          Current Question: ${question}.
          History of User Questions and Context: ${chatHistory} here if available; otherwise, proceed as if this is the first question].
          
          If this is your first interaction, make sure to leave a great first impression!`
        } 

        else if (backendUrl&&prompt==="none"||geminiApi&&prompt==="none") {
          questionOrPrompt = question;
        } 
        
        else if (backendUrl&&prompt || geminiApi&&prompt) {
          questionOrPrompt = `User is sending you some prompt about how you should act/behave along with the question he wants answered. Answer the question keeping the prompt text in mind. 

          Prompt: ${prompt}.  
          Question: ${question}.  
          History of User Questions and Context: ${chatHistory}.
          
          Respond directly and concisely based on the history. If the history is empty, consider this as the first question. Don't let the end-user know about this history. Use markdown for formatting code or other structured content where necessary.`
        } 

        else {
          questionOrPrompt = "Please provide either backend url or gemini api";
          console.log("Please provide either backend Url or geminiApi for the chat-component");
        }

        let response=await fetch(url,{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "contents": [{
            "parts":[{"text": questionOrPrompt}]
            }]
          })
        })

        let data=await response.json()
        historyPrompts.push({role:"bot",message:data.candidates[0].content.parts[0].text})
        return {
            id,
            question,
            userIcon:botIcon||getAssetPath('logoImg2.jpg'),
            answer:data.candidates[0].content.parts[0].text
        }
      }
    }
  })
})