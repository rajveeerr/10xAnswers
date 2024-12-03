import { Link } from "react-router-dom"

export default function Navbar({pathname}){
    let atCustomize=pathname==="/customize"
    return  <>
        <div className="text-white w-full px-8 sm:px-12 py-4 flex justify-between items-center cursor-pointer fixed z-[1000] backdrop-blur-lg">
            <Link to="/">
                <div className="text-2xl flex items-center gap-1 tracking-tight font-semibold">
                <span style={{ boxShadow: "0px 3px 0px 0px #78c94a" }}>10x</span>Answers</div>
            </Link>
            {!atCustomize&&<Link to="/customize">
                <button className="text-sm font-medium tracking-tight px-4 cursor-pointer duration-200 hover:bg-[#9de22fdf] py-2
                rounded-full text-black bg-[#9ee22f]">Start Customizing</button>
            </Link>}
            {atCustomize&&<a target="_blank" href="https://www.npmjs.com/package/10xanswers">
                <button className="text-sm font-medium tracking-tight px-4 cursor-pointer duration-200 hover:bg-[#9de22fdf] py-2
                rounded-full text-black bg-[#9ee22f]">Documentation</button>
            </a>}
        </div>
    </>
}
