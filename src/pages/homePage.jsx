import { Link } from "react-router-dom";

export default function HomePage() {
    return <div className="w-full min-h-screen bg-black text-white flex flex-col">
        <MainContents/>
    </div>
}

function MainContents(){
    return <div className="flex flex-col items-center justify-center w-full">
            <HeroSection/>
            <BotImages/>
        </div>
}

function HeroSection(){
    return <div className="w-[90%] max-w-3xl flex items-center justify-center flex-col text-center pt-28 bg-[url('../../assets/BG-Grid.svg')]">

            <div className='floating-icons '>
                <span className='icon forward forward-second' style={{padding:"0.4rem 0.7rem"}}><i class="fa-brands fa-github"></i></span>
                <span className='icon backward backward-first hidden sm:block' style={{top:"40px",padding:"0.3rem .6rem"}}><i class="fa-solid fa-shield"></i></span>
                <span className='icon backward backward-second'><i class="fa-solid fa-sliders"></i></span>
            </div>
            <BannerTitle/>
            <Heading/>
            <SubHeading/>
            <NPMCopyText/>
            <Buttons/>
            <div className='floating-icons' style={{}}>
                {/* <span className='icon forward forward-second' style={{top:"-100px", background:"red",padding:"0.4rem 0.7rem"}}><i class="fa-brands fa-github"></i></span> */}
                <span className='icon backward backward-first hidden sm:block' style={{top:"-100px",left:"-250px",background:"#156ec9",padding:"0.3rem .6rem"}}><i class="fa-solid fa-robot"></i></span>
            </div>
        </div>
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
        <h1 className="text-4xl sm:text-5xl p-4 mb-2 leading-none font-">
            Install, Customize, and See 
                <span style={{ boxShadow: "0px 3px 0px 0px #78c94a", margin: ".4rem", padding:"0 .4rem"}}>10x</span>
            Answers in Action.
        </h1>
    </>
}

function SubHeading(){
    return <>
        <h4 className="font-light text-base w-[85%] max-w-xl">
        10xAnswers is a pre-built chatbot component. Install it, customize 
        prompts, and you're ready to go—no additional coding required.
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

function Buttons(){
    return <>
        <div className="flex items-center mt-8 gap-3">
            <Link to={"/customize"}>
                <button className="text-sm font-medium tracking-tight px-4 cursor-pointer duration-200 hover:bg-[#9de22fdf] py-2 rounded-full text-black bg-[#9ee22f]">
                    Start Customizing
                </button>
            </Link>
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