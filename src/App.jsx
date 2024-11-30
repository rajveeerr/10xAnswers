import { Suspense } from 'react'
import './App.css'
import ChatBot from './components/chatBot'
import { RecoilRoot } from 'recoil'


function App() {
  // gotta fix border radius of heading -> done
  // add a circle for chatbot close
  // allow user to change bot icon
  // dark mode?
  // backend service
  return (
    <>
    <RecoilRoot>
      <ChatBot 
        style={{margin:0,position:"fixed",borderRadius:"8px",right:0,width:"400px",bottom:0}} 
        className="" 
        backendUrl="" 
        title="100xQuestions" 
        botIcon="./botImg.png" 
        userIcon="./logoImg.jpg" 
        position="fixed" 
        stylizeTitle={{emphasized:"100x",normal:"Questions"}}
        prompt="You are an artist" 
        geminiApi={import.meta.env.VITE_GEMINI_API} 
        theme="" draggable={false} 
        x={500} 
        y={625} 
        description="Why not ask you questions?" cta="Start Asking"
      />
    </RecoilRoot>
    </>)
}
//figure out a way to not ask users to wrap inside recoil root
export default App