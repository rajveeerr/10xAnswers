import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import '../ChatComponent.css'
import 'highlight.js/styles/github-dark.css';
import Online from './onlineIndicator';
import { allChats } from '../store/atoms/allChats';
import Question from './questions';
import Chat from './answerComponent';

function scrollToBottom(element){
    element.scrollTop=element.scrollHeight
}  

export default function ChatArea(){
    let [chatHistory,setChatHistory]=useRecoilState(allChats)//[{question: id,answer: id},]
    let chatArea=useRef();
    
    useEffect(()=>{
      scrollToBottom(chatArea.current)
    },[chatHistory])
    
    return <div className='chat-area' ref={chatArea}>
      <Online/>
      <HeroIntro/>
      {chatHistory.map((history,index)=>{
        return(<><Question key={index+history.question} id={history.question}/><Chat key={index} questionId={history.question}/></>)
      })}
    </div>
} 
  
function HeroIntro(){
    return<div className='hero-section'>
      <div className='floating-icons'>
        {/* <span className='icon forward forward-first'><i class="fa-solid fa-robot"></i></span> */}
        <span className='icon forward forward-second'><i class="fa-solid fa-comments-dollar"></i></span>
        <span className='icon backward backward-first'><i class="fa-regular fa-compass"></i></span>
        <span className='icon backward backward-second'><i class="fa-solid fa-sitemap"></i></span>
      </div>
      <h1 className='hero-title'>
        <span className='stylize'>10x</span>Answers</h1>
      <h2 className='hero-sub-title'>Because your Questions should not be left un-answered.</h2>
      <span style={{background:"rgb(44 44 44)",padding:"0.3rem 1.1rem",borderRadius:"1.6rem",margin:"1rem"}}>
        <p className='hero-description'>Start Asking you Burning Questions</p>
      </span>
    </div>
}