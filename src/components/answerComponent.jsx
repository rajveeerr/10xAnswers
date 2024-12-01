import { useEffect, useRef } from 'react'
import { useRecoilState ,useRecoilValue, useRecoilStateLoadable } from 'recoil'
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import remarkGfm from "remark-gfm";
import { v4 as uuidv4 } from 'uuid';
import { allChats } from '../store/atoms/allChats';
import { questionFamily } from '../store/atoms/questionFamily';
import { answerFamily } from '../store/atoms/answerFamily';
import '../styles.css'

export default function Chat(props){

    let askedQuestion=useRecoilValue(questionFamily(props.questionId))
    let answerId=useRef(uuidv4())
    let [currentAnswer,setAnswer]=useRecoilStateLoadable(answerFamily({id:answerId.current,question:askedQuestion.question}))
    let [chatHistory,setChatHistory]=useRecoilState(allChats)
    
    useEffect(()=>{
      let updatedAnswerId=chatHistory.map(chat=> 
        chat.question===props.questionId?{ ...chat, answer: answerId}:chat
      );
      setChatHistory(updatedAnswerId)
    },[])
      
    function handleCopy(){
    navigator.clipboard.writeText(currentAnswer.contents.answer);   
    }
      
    if(currentAnswer.state==='loading'){
  
      return <div className='chat'>
      <div className='user-icon skeleton'>
        <div className='icon-placeholder'></div>
      </div>
      <div className='chat-and-options'>
        <p className='chat-content skeleton text-placeholder'></p>
        <div className='chat-options'>
          <span className='copy chat-option'><span className='copy-icon'></span></span>
          <span className='collection chat-option'><span className='collection-icon'></span></span>
        </div>
      </div>
      </div>
    }
    
    if(currentAnswer.state==='hasError'){
      console.log(currentAnswer.contents);
      
      return <div style={{display: "flex",justifyContent:"center"}}>
        <div className='error chat-option' style={{display:"flex",justifyContent:"center",width:"max-content"}}>Some Error Occured While Generating Response</div>
      </div>
    }
    
    return <div className='chat'>
      <div className='user-icon'>
        <img src={currentAnswer.contents.userIcon}></img>
      </div>
      <div className='chat-and-options'>
        <p className='chat-content'>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {currentAnswer.contents.answer}
            </ReactMarkdown>
        </p>
        <div className='chat-options'>
          <span onClick={handleCopy}  className='copy chat-option'><span className='copy-icon'><i class="fa-regular fa-clipboard"></i></span>Copy</span>
          {/* <span className='collection chat-option'><span className='collection-icon'><i class="fa-regular fa-bookmark"></i></span>Add to Collection</span> */}
        </div>
      </div>
    </div>
}