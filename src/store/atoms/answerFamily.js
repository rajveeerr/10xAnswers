import { atomFamily, selectorFamily } from 'recoil'

let geminiApi=import.meta.env.VITE_GEMINI_API;
let historyPrompts=[]
let url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+geminiApi;

export let answerFamily=atomFamily({
  key:"answerFamily",
  default: selectorFamily({
    key: "fetchAnswers",
    get: ({id,question})=>{
      historyPrompts.push(question)
      
      return async()=>{
        let response=await fetch(url,{
          method: "POST",
          body: JSON.stringify({
            "contents": [{
            "parts":[{"text": "You are a highly intelligent senior developer assisting the user with programming-related questions. Below is the context of the user's past queries and your responses, followed by the user's current question. Answer directly and intelligently.History of User Questions and Context:"+historyPrompts+" Current Question: "+question+" .Respond directly and concisely based on the history.If the history is empty that means this is the first question, keep that in mind, also dont let end user to know about this history thing.Send data in markdown format wherever required or necessary like code or something"}]
            }]
        })
        })
        let data=await response.json()
        return {
            id,
            question,
            userIcon:"./logoImg2.jpg",
            answer:data.candidates[0].content.parts[0].text
        }
      }
    }
  })
})







