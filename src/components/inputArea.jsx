import { useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import 'highlight.js/styles/github-dark.css';
import { v4 as uuidv4 } from 'uuid';
import { questionFamily } from '../store/atoms/questionFamily';
import { allChats } from '../store/atoms/allChats';
import '../styles.css'

export default function Input(){

    let inputElement=useRef()
    let submitBtn=useRef()
    let id=useRef(uuidv4());
    let setQuestion=useSetRecoilState(questionFamily(id.current))
    let [history,setChatHistory]=useRecoilState(allChats);
    //have to figure out why this code is breaking whe useSetRecoilState is used
    
    function handleKeyDown(event){
      inputElement.current.value.trim().length!=0?submitBtn.current.classList.remove("disabled"):submitBtn.current.classList.add("disabled")
      if (event.key === 'Enter') {
        event.preventDefault()
        if(inputElement.current.value.trim().length!=0){
          setQuestion(q=>({...q,question: inputElement.current.value}))
          setChatHistory(history=>[...history,{question:id.current,answer:null}])
          id.current=uuidv4();
          inputElement.current.value="";
          submitBtn.current.classList.add("disabled")
        }
      }
    } 

    function handleSubmit(){
      if(inputElement.current.value!=""){
        setQuestion(q=>({...q,question: inputElement.current.value}))
        setChatHistory(history=>[...history,{question:id.current,answer:null}])
        id.current=uuidv4;
        inputElement.current.value="";
        submitBtn.current.classList.add("disabled")
      }
    }
    
    return <div className='input-area'>
      <textarea ref={inputElement} onKeyUp={handleKeyDown} placeholder='Ask or search anything and press Enter' className='prompt-input'></textarea>
      <span ref={submitBtn} onClick={handleSubmit} className='search-icon disabled' title="Send"><i class="fa-solid fa-square-arrow-up-right"></i></span>
      <InputOptions/>
    </div>
  }
  
function InputOptions(){
    return <div className='input-options'>
        <div className='input-option'>
            <span className='input-option-icon'><i class="fa-regular fa-file"></i></span>
            <p className='option-description'>Add Media</p>
        </div>
        <div className='input-option'>
            <span className='input-option-icon'><i class="fa-brands fa-soundcloud"></i></span>
            <p className='option-description'>Voice Chat</p>
        </div>
    </div>
}

  