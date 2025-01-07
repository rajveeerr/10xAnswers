import { questionFamily } from "../store/atoms/questionFamily"
import { useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import 'highlight.js/styles/github-dark.css';
import { chatBotAttributes } from "../store/atoms/attributesData";
import '../styles/style.css'

export default function Question(props){
  let {userIcon}=useRecoilValue(chatBotAttributes)
  let [currentQuestion,setQuestion]=useRecoilState(questionFamily(props.id))
  
  let [editing,setEditing]=useState(false)
  let questionArea=useRef()
  let originalQuestion=useRef()
  
  function handleEdit(){
    questionArea.current.contentEditable="true"
    questionArea.current.classList.add("editing")
    setEditing(editing=>!editing)
    originalQuestion.current=questionArea.current.innerText
  }

  function handleSubmit(){
    questionArea.current.contentEditable="false"
    questionArea.current.classList.remove("editing")
    setEditing(editing=>!editing)
    
    setQuestion(q=>({...q,question:questionArea.current.innerText}))
  }

  function handleCancel(){
    questionArea.current.contentEditable="false"
    questionArea.current.classList.remove("editing")
    setEditing(editing=>!editing)
    
    questionArea.current.innerText=originalQuestion.current
  }
  
  return <div className='question-container'>
    <div className='question'>
      <span className='bot-icon'><img src={userIcon||'/node_modules/10xanswers/dist/logoImg.jpg'}></img></span>
      <p className='question-txt' ref={questionArea}>{currentQuestion.question}</p>
      {!editing&&<span className='edit-icon' onClick={handleEdit}><i class="fa-solid fa-pen"></i></span>}
    </div>
    {editing&&<div className='chat-options edit-options'>
        <span onClick={handleSubmit}  className='copy chat-option'><span className='copy-icon'><i class="fa-regular fa-clipboard"></i></span>Save</span>
        <span onClick={handleCancel} className='collection chat-option'><span className='collection-icon'><i class="fa-solid fa-xmark"></i></span>Cancel</span>
    </div>}
  </div>
}