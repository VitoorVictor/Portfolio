import { Home } from "../components/Home"
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { Navbar } from "../components/Navbar";
import { Contacts } from "../components/Contacts";

export const MyPortfolioPage = () =>{
    return (  
        <div className="max-w-screen">
            <Navbar/>
            <Home />
            <About/>
            <img src="/img/transition2.svg" alt="img"/>
            <Skills/>
            <img src="/img/transition1.svg" alt="img"/>
            <Portfolio />
            <Contacts />
        </div>
    )
}