import './index.css'
// import ChatBot from './components/chatBot';


import ChatBot from './components';

function App() {

  return (
    <div style={{width:"100vw",height:"100vh"}}>
       <ChatBot 
          chatWindowStyle={{backgroundColor:"rgb(11 10 10)"}} 
          chatComponentStyle={{maxHeight:"580px",height:"auto",width:"390px",margin:0}}    
          chatComponentClassName="static md:absolute"
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
          userIcon="https://avatar.iran.liara.run/public"
          botIcon="../public/botIcon.webp"
          stylizedTitle={{ "emphasized": "Safire", "normal": "Bot" }}
        /> 
    </div>)
}

export default App;