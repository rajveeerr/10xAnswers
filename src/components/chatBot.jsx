import '../styles/chatStyle.css'
import 'highlight.js/styles/github-dark.css';
import Input from './inputArea';
import ChatArea from './chatArea';
import Heading from './heading';
import {useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Rnd } from 'react-rnd'
import { chatBotAttributes } from '../store/atoms/attributesData';

export default function ChatBot({backendUrl,geminiApi,prompt,botIcon,description,cta,draggable,title,
  stylizeTitle,style,className,x,y,userIcon,theme}){
    
    let setAttributeData=useSetRecoilState(chatBotAttributes)

    useEffect(() => {
      if(!document.getElementById("font-awesome-script")) {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/b6fe51c8e7.js";
        script.id = "font-awesome-script";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        setAttributeData({backendUrl,geminiApi,title,prompt,botIcon,userIcon,stylizeTitle,description,cta})
      }
    }, []);
    
    return <>
    {draggable?
    <Rnd default={{ x: x , y: y}}>
      <div className={'chat-section '+className} style={{...style}}>
        <Heading/>
        <ChatArea/>
        <Input/>
      </div>
    </Rnd>:
    <div className={'chat-section '+className} style={{...style}}>
        <Heading/>
        <ChatArea/>
        <Input/>
    </div>}
  </>
}

//theme not working yet
//if no position is set and draggable if false, this will behave as flexbox normally

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

// x and y are supposed to be numbers which indicates the initial positioning of the chat component if draggable is sert to true

// if you dont have a backend url, you can simply type your free gemini api key here and you can directly call gemini from the 
// frontend itself tho i would not recommend this approach as this will expose your api keey to the users of your site

// position can be set to, absolute/fixed/flex and will take effect if draggable is false

//you can change every style of the componrent like height and width like of any other component either using tailwind or inline css

// you can apply styling to the other div of the chatbot for inner styling you can either ping me up on x discord or github or you 
// can contribute to its repo 


// if user is passing backend url to hit, the question is sent in a specific format provided i recommend storing history of all the
// questions and responses on be and sending them along with your requests from backend no gemini key required. If user sends prompt
// and geminiApi req will be sent to gemini with the history of questions, i recommend writing prompts that specifies about history
// and the array of all the questions asked will be added in the end of prompt you provided, for better history management

// user need to wrap this inside <RecoilRoot/> thats it and its necessary steps npm i recoil import {recoil-root} from 'recoil' <RecoilRoot>in
// app before using this chat component

//i can make its backend and allow users to hit it for their usage if they cant create one

//todo: cook up its be and revise week11

// last streach: 
// HIGH PRIORITY=> fix bugs: prolly about the ids assigning -> done
// make it persistant
// npm-package out of it
// THE MAIN THING: Figure out why would anyone use it??? Something sarchesmic?? Some responses that are not provided by anyone
// figure out why extra re-rendering