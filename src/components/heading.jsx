import { useRecoilValue } from "recoil"
import { chatBotAttributes } from "../store/atoms/attributesData"


export default function Heading(){
  let {title}=useRecoilValue(chatBotAttributes)

  return <div className='chat-component-heading'>
    <h3><i class="fa-solid fa-robot"></i>{title||"10xAnswers"}</h3>
  </div>
  }