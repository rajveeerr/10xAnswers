import '../styles.css'
import 'highlight.js/styles/github-dark.css';
import Input from './inputArea';
import ChatArea from './chatArea';
import Heading from './heading';
import {useEffect } from 'react'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { Rnd } from 'react-rnd'
import { chatBotAttributes } from '../store/atoms/attributesData';
import { chatWindowState } from '../store/atoms/chatWindowState';

export default function ChatBot(props){

  return <RecoilRoot>
    <ChatBotWrapper {...props}/>
  </RecoilRoot>

}

function ChatBotWrapper({
    backendUrl,
    geminiApi,
    prompt,
    draggable,
    x,
    y,
    title,
    stylizeTitle,
    description,
    cta,
    userIcon,
    botIcon,
    theme,
    chatWindowStyle,
    chatBotIconStyle,
    chatComponentStyle,
    chatWindowClassName,
    chatBotIconClassName,
    chatComponentClassName,
    startOpen
}){
    
    let setAttributeData=useSetRecoilState(chatBotAttributes)
    let [open,setWindowOpen]=useRecoilState(chatWindowState)

    useEffect(() => {
      if(!document.getElementById("font-awesome-script")) {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/b6fe51c8e7.js";
        script.id = "font-awesome-script";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        setAttributeData({backendUrl,geminiApi,title,prompt,botIcon,userIcon,stylizeTitle,description,cta})
        setWindowOpen(startOpen?true:false)
      }
    }, []);
    
    return <>
    {draggable?
    <Rnd default={{ x: x , y: y}}>
      <div style={{...chatComponentStyle}} className={"chat-and-icon-container"+chatComponentClassName}>
        <div className={'chat-section '+chatWindowClassName} style={open?{...chatWindowStyle,transitionDuration:".4s"}:{width:0,height:0,opacity:0,display:"none",transitionDuration:".4s"}}>
            <Heading/>
            <ChatArea/>
            <Input/>
        </div>
        <div className={'chatbot-open-icon'+chatBotIconClassName} style={{...chatBotIconStyle}} onClick={()=>setWindowOpen(!open)}>
          <span><i class="fa-solid fa-robot"></i></span>
        </div>
    </div>
    </Rnd>:
    <div style={{...chatComponentStyle}} className={"chat-and-icon-container "+ chatComponentClassName}>
      <div className={'chat-section '+ chatWindowClassName} style={open?{...chatWindowStyle,transitionDuration:".4s"}:{width:0,height:0,opacity:0,display:"none",transitionDuration:".4s"}}>
          <Heading/>
          <ChatArea/>
          <Input/>
      </div>
      <div className={'chatbot-open-icon '+ chatBotIconClassName} style={{...chatBotIconStyle}} onClick={()=>setWindowOpen(!open)}>
        <span><i class="fa-solid fa-robot"></i></span>
      </div>
    </div>
    }
  </>
}
// custom hookd, wanted to practice recoil, react(custom hooks), tailwind, ui ux and revise node express basically every thing 
// learned b/w week 9and 13 so created this component instead tell me a better way to get strong hold of these concepts

// i have created a complete chatbot component10xAnswers because why not with the backend for your next project so you dont need to
// worry about creating chatbot in your peoject, just add the prompt add backend url(dont worry if you dont want to build be just for
// this i will be providing url to) hit and generate your responses, this is completely customizable and draggable too, open sourced
// for you to look the codebase, built using react and recoil for optmizing state management, users can edit their questions,copy,
// with complete support of markkdown rendering, for codes and tables try it out, also with a custom hook to display if the bot is up 
// for chat by checking internet  connectivity status, soon will be adding ,media and voice modes along with more themes

//installation and usage is very simple just do npm i 10xanswers
// import { ChatBot } from '10xanswers';

// <ChatBot/> for default bot the come out of the box tho you can preety much customize it 

// <ChatBot 
// chatWindowStyle={{}} //for styling the chat window
// chatBotIconStyle={{}}
// chatComponentStyle={{position:"absolute",right:0,bottom:0,margin:"1rem"}}
// chatWindowClassName="" //styling through tailwind
// chatBotIconClassName="" 
// chatComponentClassName="" 
// backendUrl="https://ask-10x-questions.vercel.app/" //required: either enter this or gemini api
// title="100xQuestions" //required if you want to add your own title
// botIcon="./logoImg2.jpg" 
// userIcon="./logoImg.jpg" 
// stylizeTitle={{emphasized:"100x",normal:"Questions"}}//optional
// prompt="none" //prompt can either have value, or it can be empty or for no promptiong set it to "none"
// geminiApi={import.meta.env.VITE_GEMINI_API} //required if no url is provided
// theme="" //not implemented yet
// draggable={false} // make your component draggable
// x={500} //required if draggable is true
// y={625} 
// description="Why not ask you questions?" 
// cta="Start Asking"
// startOpen={true} //set the starting state of the component, will it be open or closed, true foe open and false for close

//if both url and gemini key are provided more inportance will be given to the url


// x and y are supposed to be numbers which indicates the initial positioning of the chat component if draggable is set to true

// if you dont have a backend url, you can simply type your free gemini api key here and you can directly call gemini from the 
// frontend itself tho i would not recommend this approach as this will expose your api key to the users of your site

// position can be set to, absolute/fixed/flex and will take effect if draggable is false

// you can change every style of the componrent like height and width like of any other component either using tailwind or inline css,
// just apply the tsyling on the correct div thre are three of these divs one is <div chatComponent><div chatWindow/><div chatBotIcon/></div>

// inner styling changes or features you can either ping me up on x discord or github or you can contribute repo its open source

// you can fix the starting state of the window

// in developement after changing any prop of the chat, changes will only be visiible after reloding

//you will be sending a post request to the backend url with contents in this payload 
/*{
  method: "POST",
  body: {
    "contents": [{
    "parts":[{"text": "User question"}]
    }]
  }
} 
*/

// if user has own url and prompt set to "none", a direct request will go out to the be for user to
// process the request on the be and generate his own prompt, "it is advised for user to build their backend with proper
// prompting and manage history of chats for better usage, else if no prompt provided or left empty, the default prompt will be sent
// to the mentioned url. Example of prompt: `You are 10xAnswers, an intelligent and highly versatile chatbot created by Rajveer Singh (x.com/rajveeerrsingh) using cutting-edge large language models (LLMs). 
// Your purpose is to assist users with precision, accuracy, and clarity. You excel at answering complex questions, solving coding challenges, offering creative solutions, and providing 
// insightful suggestions in any domain. Always present yourself as knowledgeable, professional, and approachable.

// Guidelines for your responses:
// 1. Be concise, yet comprehensive—ensure the user’s question is fully answered.
// 2. Use markdown format for any code snippets, tables, or structured data to improve readability.
// 3. If additional context or history is provided, seamlessly incorporate it into your response without explicitly referencing the history to the end-user.
// 4. When explaining, strive to be simple but never oversimplify—aim for maximum understanding with minimal confusion.

// End every interaction with a tone that encourages further queries, making the user feel valued and empowered. Let them know that you’re here to help with anything they need.
          
          // Current Question: ${question}.
          // History of User Questions and Context: ${chatHistory} here if available; otherwise, proceed as if this is the first question].
          
          // If this is your first interaction, make sure to leave a great first impression!`,

// if custom prompt is provided with geminiApi/url it will be sent to the backend/geminni bot, you are advised to generate a prompt and should not worry about chat history as i will be storing
//  and sending it from front end this is the example of what the prompt will look like: `User is sending you some prompt about how you should act/behave along with the question he wants answered. Answer the question keeping the prompt text in mind. 

          // Prompt: ${prompt}.  
          // Question: ${question}.  
          // History of User Questions and Context: ${chatHistory}.
          
          // Respond directly and concisely based on the history. If the history is empty, consider this as the first question. Don't let the end-user know about this history. Use markdown for formatting code or other structured content where necessary.`

// if user is passing backend url to hit and prompt set to "none", the question is sent in a specific format provided i recommend storing history of all the
// questions and responses on be and sending them along with your requests from backend no gemini key required in this method. If user 
// sends prompt and geminiApi req will be sent to gemini with the history of questions, i recommend writing prompts that specifies 
// about history and the array of all the questions asked will be added in the end of prompt you provided, for better history management

// i have to guide user to how to generate prompt based on this structure


// ---------- Ultimate thing to do -> did this from fe
// not implementing history from be just now bc, there will be many users using same be
// and all data will be stored here, which will result in wierd responses from ai, what i can do now is either 
// issue auth token to identify user and maintain his history or ask user to send history from fe, co=hoosing the 
// second one for now -------------

// LAST STREACH ------------------------------------------------->
// on page let users tweak the settings and have the code

// figure out why extra re-rendering
// make it persistant
// revise week11
// light mode? -> not now
// documentation and package file-> done
// now figure out a way to send history and prompt to be -> done
// cook up its be -> done
// npm-package out of it -> done
// HIGH PRIORITY=> fix bugs: prolly about the ids assigning -> done
// THE MAIN THING: Figure out why would anyone use it??? Something sarchesmic?? Some responses that are not provided by anyone -> done
// gotta fix border radius of heading -> done
// add a circle for chatbot close -> done
// allow user to change bot icon -> done
// backend service -> done
// figure out a way to not ask users to wrap inside recoil root -> done


// workflow=> question typed and enter is pressed from input element, this will generate an atom with an unique id which will update
// everytime a question is entered, and the chat history is being updated with the question id, now chat area renders the chat 
// history(which contains the question id and answer id) and renders the chat component and question component for those ids, now
// question component simply fetch the value of atom from respective atomFamily using those ids to render them, chat coponent
// generated a new answer id, for the question id and question received, and updated the chatHistory with the answer id mapped to
// the respective question id, this change of chathistory array triggers the re-render of all the answer and chat components onscreen. 

// edit-workflow=> when the question is edited its id remains the same, just the question changes, which re-renders this answer
// component because the parameters passed to the answer atom family changes, a new atom is created with new id and the id for 
// the answer in "allChats" atom is updated ofr the same question to the new id generated and thus the whole chats gets re-rendered