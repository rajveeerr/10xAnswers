import './App.css'
import {ChatBot} from './components/chatBot'


function App() {

  return (
    <>
       <ChatBot //avoid adding position to the chatbot through style or class it will result in abnormal behavior
          chatWindowStyle={{backgroundColor:"rgb(11 10 10)"}} 
          chatComponentStyle={{maxHeight:"580px",height:"auto",width:"400px",margin:0}}    
          chatComponentClassName="static md:absolute"
          botIcon="./logoImg2.jpg" 
          userIcon= "./logoImg.jpg"
          stylizeTitle={{emphasized:"10x",normal:"Answers"}}//if emphasized title and title both are given priority will be given to emp title
          geminiApi="AIzaSyDpdTZc3GzpvmAfjwfwE14BoQaTu4QmMo0"
          // x={500} 
          // y={625} 
          backendUrl="https://ask-10x-questions.vercel.app/" 
          // title="Why Ask?"
          // prompt="You are an artist" 
          draggable={false} 
          // description="Why not ask you questions?" 
          cta="Start Asking"
          startOpen={true}
        /> 
    </>)
}

export default App;