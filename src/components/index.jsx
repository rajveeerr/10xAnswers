import '../styles/style.css'
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
    x=100,
    y=100,
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
        
        setWindowOpen(startOpen?true:false)
      }
    }, []);
    
    useEffect(()=>{
      setAttributeData({backendUrl,geminiApi,title,prompt,botIcon,userIcon,stylizeTitle,description,cta,})
    },[backendUrl,geminiApi,title,prompt,botIcon,userIcon,stylizeTitle,description,cta])
    
    return <>
    {draggable?
    <Rnd default={{ x: x , y: y}}>
      <div style={open?null:{height:"min-content",width:"min-content"}} className={"chat-and-icon-container transition-all "+ chatComponentClassName}>
        <div className={'chat-section transition-all'+ chatWindowClassName} style={open?{...chatWindowStyle}:{width:0,height:0,opacity:0,display:"none"}}>
            <Heading setWindowState={setWindowOpen}/>
            <ChatArea/>
            <Input/>
        </div>
        {!open&&<div className={'chatbot-open-icon '+ chatBotIconClassName} style={{...chatBotIconStyle}} onClick={()=>setWindowOpen(!open)}>
          <span><i class="fa-solid fa-robot"></i></span>
        </div>}
    </div>
    </Rnd>:
    <div style={open?null:{height:"min-content",width:"min-content"}} className={"chat-and-icon-container transition-all "+ chatComponentClassName}>
      <div className={'chat-section transition-all'+ chatWindowClassName} style={open?{...chatWindowStyle}:{width:0,height:0,display:"none"}}>
          <Heading setWindowState={setWindowOpen}/>
          <ChatArea/>
          <Input/>
      </div>
      {!open&&<div className={'chatbot-open-icon '+ chatBotIconClassName} style={{...chatBotIconStyle}} onClick={()=>setWindowOpen(!open)}>
        <span><i class="fa-solid fa-robot"></i></span>
      </div>}
    </div>
    }
  </>
}
