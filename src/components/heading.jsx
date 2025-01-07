import { useRecoilValue } from "recoil"
import { chatBotAttributes } from "../store/atoms/attributesData"
import '../styles/style.css'

export default function Heading({setWindowState}){
  let {title}=useRecoilValue(chatBotAttributes)

  return <div className='chat-component-heading flex justify-between'>
    <h3><i class="fa-solid fa-robot"></i>{title||"10xAnswers"}</h3>
    <span 
      className="p-1 cursor-pointer text-lg" 
      onClick={()=>{setWindowState(current=>!current)}}
    >
      <i class="fa-solid fa-xmark"></i>
    </span>
  </div>
}