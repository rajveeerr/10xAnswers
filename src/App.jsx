import './App.css'
import ChatBot from './components/chatBot'
import { RecoilRoot } from 'recoil'


function App() {
  // gotta fix border radius of heading -> done
  // add a circle for chatbot close -> done
  // allow user to change bot icon -> done
  // dark mode?
  // backend service
  // on page let users tweak the settings and have the code
  //figure out a way to not ask users to wrap inside recoil root

  //need to wrap application from inside in recoil root
  return (
    <>
    {/* <RecoilRoot> */}
      <ChatBot //avoid adding position to the chatbot through style or class it will result in abnormal behavior
        chatWindowStyle={{margin:0,height:"550px",width:"350px"}} 
        chatBotIconStyle={{}}
        chatComponentStyle={{position:"absolute",right:0,bottom:0,margin:"1rem"}}
        chatWindowClassName="" 
        chatBotIconClassName="" 
        chatComponentClassName="" 
        backendUrl="" 
        title="100xQuestions" 
        botIcon="./logoImg2.jpg" 
        userIcon="./logoImg.jpg" 
        stylizeTitle={{emphasized:"100x",normal:"Questions"}}
        prompt="You are an artist" 
        geminiApi={import.meta.env.VITE_GEMINI_API} 
        theme="" 
        draggable={false} 
        x={500} 
        y={625} 
        description="Why not ask you questions?" cta="Start Asking"
      />
    {/* </RecoilRoot> */}
    </>)
}

export default App;