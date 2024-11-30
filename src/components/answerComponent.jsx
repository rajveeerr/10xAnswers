import { useEffect, useRef } from 'react'
import { useRecoilState ,useRecoilValue, useRecoilStateLoadable } from 'recoil'
import '../ChatComponent.css'
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import remarkGfm from "remark-gfm";
import { v4 as uuidv4 } from 'uuid';
import { allChats } from '../store/atoms/allChats';
import { questionFamily } from '../store/atoms/questionFamily';
import { answerFamily } from '../store/atoms/answerFamily';

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
          <span className='collection chat-option'><span className='collection-icon'><i class="fa-regular fa-bookmark"></i></span>Add to Collection</span>
        </div>
      </div>
    </div>
}

// workflow=> question typed and enter is pressed from input element, this will generate an atom with an unique id which will update
// everytime a question is entered, and the chat history is being updated with the question id, now chat area renders the chat 
// history(which contains the question id and answer id) and renders the chat component and question component for those ids, now
// question component simply fetch the value of atom from respective atomFamily using those ids to render them, chat coponent
// generated a new answer id, for the question id and question received, and updated the chatHistory with the answer id mapped to
// the respective question id, this change of chathistory array triggers the re-render of all the answer and chat components onscreen. 

// edit-workflow=> when the question is edited its id remains the same, just the question changes, which re-renders this answer
// component because the parameters passed to the answer atom family changes, a new atom is created with new id and the id for 
// the answer in "allChats" atom is updated ofr the same question to the new id generated and thus the whole chats gets re-rendered