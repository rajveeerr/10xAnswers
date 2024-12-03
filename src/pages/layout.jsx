import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

export default function Layout(){
    const {pathname} = useLocation();
    return <div>
        
        <Navbar pathname={pathname}/>
        <Outlet/>
        <Footer/>
    </div>
}