import ChatBot from './components';

// plan is to create a chatbot that will be used by our customers, they will simply put their auth token they got after
// registering in the prop, 
// and cool 

// to ask him what features are we giving with the bot? will we be giving discrete set of customization values?

// problems:- how will we authenticate user cant really include auth header(to identify user and their data) in the request
// that will expose it to others
function App() {

  return (
    <div style={{width:"100vw",height:"100vh"}}>
        <h1>This is the demo of how the chatbot will look like, and what props are needed to pass to the chatbot.</h1>      
       <ChatBot 
          chatWindowClassName="bg-black" 
          chatComponentClassName="static md:absolute"
          botIcon="./logoImg2.jpg" 
          userIcon= "./logoImg.jpg"          
          backendUrl="https://ask-10x-questions.vercel.app/" 
          // prompt="You are an artist" 
          draggable={false} 
          // x={500} 
          // y={625} 
          // description="Why not ask you questions?" 
          startOpen={true}
        /> 
    </div>)
}

export default App;