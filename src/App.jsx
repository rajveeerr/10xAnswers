import './App.css'
import ChatBot from './components/chatBot'
import { RecoilRoot } from 'recoil'


function App() {

  return (
    <>
      <ChatBot //avoid adding position to the chatbot through style or class it will result in abnormal behavior
        chatWindowStyle={{}} 
        chatBotIconStyle={{}}
        chatComponentStyle={{position:"absolute",right:0,bottom:0,margin:"1rem"}}
        chatWindowClassName="" 
        chatBotIconClassName="" 
        chatComponentClassName="" 
        backendUrl="https://ask-10x-questions.vercel.app/" //required: either enter this or gemini api
        title="100xQuestions" //required if you want to add your own title
        botIcon="./logoImg2.jpg" 
        userIcon="./logoImg.jpg" 
        stylizeTitle={{emphasized:"100x",normal:"Questions"}}//optional
        prompt="none" //prompt can either have value, or it can be empty or for no promptiong set it to "none"
        geminiApi={import.meta.env.VITE_GEMINI_API} //required if no url is provided
        theme="" //not implemented yet
        draggable={false} // make your component draggable
        x={500} //required if draggable is true
        y={625} 
        description="Why not ask you questions?" 
        cta="Start Asking"
        startOpen={true} //set the starting state of the component, will it be open or closed, true foe open and false for close

//if both url and gemini key are provided more inportance will be given to the url
      />
    </>)
}

export default App;