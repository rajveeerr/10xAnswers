import { Link } from "react-router-dom";
import ChatBot from "../components/chatBot";
import { useState } from "react";

export default function CustomizationPage(){
    return <div className="w-full min-h-screen bg-black text-white flex flex-col">
        <MainContents/>
    </div>
}

function MainContents(){

    return <div className="flex flex-col items-center justify-center w-full bg-[url('../../assets/BG-Grid.svg')]">
            <HeroSection/>
            
        </div>
}

function HeroSection(){

    const [chatbotConfig, setChatbotConfig] = useState({
        backendUrl: "https://ask-10x-questions.vercel.app/",
        title: "10xAnswers",
        draggable: false,
        startOpen: true,
        height: "580px",
        width: "400px",
        backgroundColor: "rgb(11 10 10)",
        description: "Because your Questions should not be left un-answered.",
        cta: "Start Asking your Burning Questions",
        prompt: "You're 10xAnswers answer users with any query about how they can integrate you in their project",
        geminiApiKey: "",
        userIconUrl: "",
        botIconUrl: "",
        stylizedTitle: {
          emphasized: "",
          normal: ""
        },
        x: null,
        y: null
      });

    const onChangeHandler = (e) => {
        const { name, value, type, checked } = e.target;
        
        const newValue = type === 'checkbox' ? checked : 
                         value === 'true' ? true : 
                         value === 'false' ? false : 
                         value;
        console.log(name + value + type +checked);
        
        if (name.startsWith('stylizedTitle.')) {
          const titleKey = name.split('.')[1];
          console.log("rendering");
          
          setChatbotConfig(prev => ({
            ...prev,
            stylizedTitle: {
              ...prev.stylizedTitle,
              [titleKey]: newValue
            }
          }));
          return;
        }
    
        if (name === 'draggable') {
          setChatbotConfig(prev => ({
            ...prev,
            draggable: newValue === true,
            x: newValue === true ? (prev.x || 500) : null,
            y: newValue === true ? (prev.y || 625) : null
          }));
          console.log(chatbotConfig);
          console.log(newValue);
          
          return;
        }
    
        if (name === 'x' || name === 'y') {
          setChatbotConfig(prev => ({
            ...prev,
            [name]: Number(newValue)
          }));
          return;
        }
            
        setChatbotConfig(prev => ({
          ...prev,
          [name]: newValue
        }));
      };
      

      const generateChatBotCode = () => {
        // Destructure specific props for special handling
        const { height, width, backgroundColor, ...restConfig } = chatbotConfig;
      
        // Create chat component style object
        const chatComponentStyle = {
          maxHeight: height,
          height: 'auto',
          width: width,
          margin: 0
        };
      
        // Create chat window style object
        const chatWindowStyle = {
          backgroundColor: backgroundColor
        };
      
        // Convert remaining config to prop string
        const configString = Object.entries(restConfig)
          .filter(([key, value]) => value !== null && value !== '')
          .map(([key, value]) => {
            if (typeof value === 'object') {
              return `${key}={${JSON.stringify(value)}}`;
            }
            if (typeof value === 'boolean') {
              return `${key}={${value}}`;
            }
            return `${key}="${value}"`;
          })
          .join('\n    ');
      
        return `
      // Customized ChatBot Component
      import ChatBot from 'your-chatbot-library';
      
      function CustomChatBot() {
        return (
          <ChatBot
          chatComponentStyle={${JSON.stringify(chatComponentStyle, null, 2)}}
          chatWindowStyle={${JSON.stringify(chatWindowStyle, null, 2)}}
          ${configString}
          />
        );
      }
      
      export default CustomChatBot;
      `;
      };
    const copyCodeToClipboard = () => {
        const code = generateChatBotCode();
        navigator.clipboard.writeText(code)
          .then(() => {
            alert('ChatBot code copied to clipboard!');
          })
          .catch(err => {
            console.error('Failed to copy code', err);
          });
      };

    return <div className="w-full flex items-center justify-center flex-col text-center ">

 
            {/* <Heading/> */}
            {/* <SubHeading/> */}
            <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-2 justify-center pt-10 ">
                <div className="pt-14 p-6 md:p-14 rounded-2xl flex flex-col items-start justify-start md:w-max w-full md:max-w-[60%] text-left h-[95vh] overflow-y-scroll bg-[#101015] border-[#27272A99] ">{/* bg-[#3232327d] bg-[#0d0d10]*/}
                    <div className="text-3xl md:text-2xl font-medium">Configure ChatBot</div>
                    <div className="text-base mt-4 font-light">Edit fields and see changes in action, copy code from clicking below button.</div>
                    <div className="pt-3 w-full">
                    <InputLabelBox 
                    label="Backend Url" 
                    name="backendUrl"
                    defaultValue={chatbotConfig.backendUrl} 
                    type="url" 
                    required={true}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Title" 
                    name="title"
                    defaultValue={chatbotConfig.title} 
                    type="text"
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Stylized Title" 
                    name="stylizedTitle.emphasized"
                    defaultValue={chatbotConfig.stylizedTitle.emphasized} 
                    type="text"
                    placeholders="Enter the part of title you want to have some Style"
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Normal Title" 
                    name="stylizedTitle.normal"
                    defaultValue={chatbotConfig.stylizedTitle.normal} 
                    type="text"
                    placeholders="Enter the remaining part where you want no styling"
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Draggable" 
                    name="draggable"
                    defaultValue={chatbotConfig.draggable} 
                    select={true}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Start Open" 
                    name="startOpen"
                    defaultValue={chatbotConfig.startOpen} 
                    select={true}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Height"
                    name="height"
                    defaultValue={chatbotConfig.height}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Width"
                    name="width"
                    defaultValue={chatbotConfig.width}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Background Color"
                    name="backgroundColor"
                    defaultValue={chatbotConfig.backgroundColor}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Description" 
                    name="description"
                    defaultValue={chatbotConfig.description} 
                    type="text" 
                    textarea={true}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Call to Action" 
                    name="cta"
                    defaultValue={chatbotConfig.cta} 
                    type="text"
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Prompt" 
                    name="prompt"
                    defaultValue={chatbotConfig.prompt} 
                    type="text" 
                    textarea={true}
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Gemini API Key" 
                    name="geminiApiKey"
                    defaultValue={chatbotConfig.geminiApiKey} 
                    type="text"
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="User Icon Url" 
                    name="userIconUrl"
                    defaultValue={chatbotConfig.userIconUrl} 
                    type="url"
                    onChange={onChangeHandler}
                    />
                    <InputLabelBox 
                    label="Bot Icon Url" 
                    name="botIconUrl"
                    defaultValue={chatbotConfig.botIconUrl} 
                    type="url"
                    onChange={onChangeHandler}
                    />
                    <Buttons onClickHandeler={copyCodeToClipboard}/>
                    </div>
                </div>
                <div className="flex items-end justify-center flex-1">
                {/* <ChatBot //avoid adding position to the chatbot through style or class it will result in abnormal behavior
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
                /> */}
                <ChatBot 
                    chatWindowStyle={{backgroundColor: chatbotConfig.backgroundColor}}
                    chatComponentStyle={{maxHeight: chatbotConfig.height,height: chatbotConfig.height,width: chatbotConfig.width,margin: 0}}
                    chatComponentClassName="static md:absolute"
                    botIcon={chatbotConfig.botIconUrl || "./logoImg2.jpg"}
                    userIcon={chatbotConfig.userIconUrl || "./logoImg.jpg"}
                    stylizeTitle={chatbotConfig.stylizedTitle}
                    geminiApi={chatbotConfig.geminiApiKey}
                    x={chatbotConfig.x}
                    y={chatbotConfig.y}
                    backendUrl={chatbotConfig.backendUrl}
                    title={chatbotConfig.title}
                    prompt={chatbotConfig.prompt}
                    draggable={chatbotConfig.draggable}
                    description={chatbotConfig.description}
                    cta={chatbotConfig.cta}
                    startOpen={chatbotConfig.startOpen}
                />
                </div>

            </div>
        </div>
}

function InputLabelBox({label, name, inputType, defaultValue, select, textarea, required, min, max, numbers, placeholders, onChange,description}) {
    const [draggableState, setDraggableState] = useState(false);
  
    const displayXandY = (e) => {
      onChange(e);
      if (name === 'draggable') {
        setDraggableState(e.target.value === 'true');
      }
    };
  
    return (
      <div className="flex flex-col items-start gap-2 py-3 w-full">
        <label className="text-xs px-3 font-light flex items-center gap-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
        <p>{description}</p>
        {textarea && (
            <textarea
            className="bg-[#202020] text-[#dbdfe6] px-6 w-full max-w-[500px] rounded-2xl py-3 h-40 resize-none bg-transparent border-[#3d3d3de0] border"
            name={name}
            type={inputType}
            defaultValue={defaultValue}
            placeholder={label}
            onChange={onChange}
            ></textarea>
        )}
        {!select && !textarea && (
            <input
            className="bg-[#202020] px-6 text-[#dbdfe6] rounded-2xl text-base py-3 w-full max-w-[500px] border-[#3d3d3de0] border bg-transparent"
            name={name}
            type={inputType}
            defaultValue={defaultValue}
            placeholder={placeholders || label}
            onChange={onChange}
            />
        )}
    
        {select && (
            <select
            name={name}
            onChange={displayXandY}
            className="bg-[#202020] px-6 text-[#dbdfe6] w-full max-w-[500px] rounded-2xl py-3 bg-transparent border-[#3d3d3de0] border"
            defaultValue={defaultValue}
            placeholder={label}
            >
            <option value="">--Please choose an option--</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        )}
    
        {draggableState && (
            <div className="flex flex-col items-start gap-2 py-3 w-full">
            <label className="px-3 text-sm flex items-center gap-1">
              Set Initial X-Position of the ChatBox
            </label>
            <div className="text-xs px-3 font-light">This positioning determines where the chat component will first be present when draggable is set to true</div>
            <input
              className="bg-[#202020] px-6 text-[#dbdfe6] w-full max-w-[500px] rounded-2xl py-3 bg-transparent border-[#3d3d3de0] border"
              type="number"
              name="x"
              defaultValue={500}
              min={0}
              placeholder="Set X-Position of the ChatBox"
              onChange={onChange}
              />
    
            <label className="px-3 text-sm flex items-center gap-1">
              Set Initial Y-Position of the ChatBox
              <p>{}</p>
            </label>
            <input
              className="bg-[#202020] px-6 text-[#dbdfe6] w-full max-w-[500px] rounded-2xl py-3 bg-transparent border-[#3d3d3de0] border"
              type="number"
              name="y"
              defaultValue={625}
              min={0}
              placeholder="Set Y-Position of the ChatBox"
              onChange={onChange}
            />
          </div>
        )}
      </div>
    );
  }  
function BannerTitle(){
    return <>
        <a target="_blank" href="https://www.npmjs.com/package/10xanswers">
            <p className="flex items-center justify-center gap-2 px-4 py-1 text-xs m-2 bg-[#101015] rounded-full border border-[#202029] cursor-pointer">
                Live Now at 
                <span className="text-lg bg-gradient-to-r from-[#9ee22f] to-white bg-clip-text text-transparent">
                    <i class="fa-brands fa-npm"></i>
                </span> 
                Registry
            </p>
        </a>
    </>
}

function Heading(){
    return <>
        <h1 className="text-4xl sm:text-5xl p-4 mb-2 bold leading-none text-lg ">
            Design Your Perfect Chatbot
        </h1>
    </>
}

function SubHeading(){
    return <>
        <h4 className="font-light text-base w-[85%] max-w-xl">
        Tweak attributes, see real-time changes, and generate your custom code—all in one place. With 10xAnswers, 
        building a chatbot is as simple as copy, paste, and deploy.
        </h4>
    </>
}
function NPMCopyText(){
    let copyHandeler=(e)=>{
        navigator.clipboard.writeText("npm i 10xanswers");
        e.target.innerText="Copied";
        setTimeout(()=>
            e.target.innerHTML=`<i class="fa-solid fa-copy"></i>npm i 10xanswers`
        ,1000
    )}

    return <button onClick={copyHandeler}
    className="flex items-center justify-center gap-2 px-5 py-3 mt-5 text-sm m-2 bg-[#101015] rounded-lg border border-[#202029] cursor-pointer">
    <i class="fa-solid fa-copy"></i> npm i 10xanswers
</button>
}

function Buttons({onClickHandeler}){
    return <>
        <div className="flex items-center mt-8 gap-3">
            
                <button onClick={onClickHandeler} className="text-sm font-medium tracking-tight px-4 cursor-pointer duration-200 hover:bg-[#9de22fdf] py-2 rounded-full text-black bg-[#9ee22f]">
                    Copy Customized Code
                </button>
            
            <a href="https://www.npmjs.com/package/10xanswers" target="_blank">
                <button className="flex items-center justify-center gap-2 text-sm font-medium tracking-tight px-4 cursor-pointer duration-200 hover:bg-[#243022df] py-2 rounded-full text-white bg-[#101015] border border-[#1d1d22]">
                    <i class="fa-brands fa-github"></i> 
                    Download Package
                </button>
            </a>
        </div>
    </>
}
function BotImages(){
    return <>
        <div className="flex mt-5 items-center justify-center w-full pt-8 pb-10 overflow-hidden">
            <span className="absolute w-80 h-[30rem] z-10" style={{ boxShadow: "rgb(1 140 7 / 26%) 0px 0px 60px 20px" }}>.</span>
            <img className="w-80 relative z-10 left-20 hidden sm:block" src="../../assets/markdownTable.png"></img>
            <img className="w-96 z-20 " src="../../assets/chatBot.png"></img>
            <img className="w-80 relative right-20 z-10 hidden sm:block" src="../../assets/markdownCode.png"></img>
        </div>
    </>
}