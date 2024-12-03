import { Link } from "react-router-dom";

export default function Footer(){
    return <>
        <div className=" text-white w-full px-8 py-4 flex justify-between items-center cursor-pointer bg-[#101015] border border-[#202029] ">
            <Link to="/">
                <div className="text-xl flex items-center gap-1 tracking-tight font-semibold cursor-pointer">
                    <span style={{ boxShadow: "0px 3px 0px 0px #78c94a" }}>10x</span>Answers
                </div>
            </Link>
            <div className="md:text-sm text-xs flex items-center gap-1">
                Created <span className="hidden sm:block">and designed </span>by 
                <a target="_blank" title="Twitter" href="https://x.com/rajveeerrsingh">
                    <span className="text-[#9ee22f] cursor-pointer font-bold underline">Rajveer Singh</span>
                </a>
            </div>
            <div className="items-center gap-5 text-2xl hidden sm:flex cursor-pointer">
                <a target="_blank" href="https://github.com/rajveeerr/10xAnswers">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a target="_blank" href="https://www.npmjs.com/package/10xanswers">
                    <i class="fa-brands fa-npm"></i>
                </a>
            </div>
        </div>
    </>
}