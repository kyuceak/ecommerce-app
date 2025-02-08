import "../styles/layout.css"
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Outlet } from "react-router-dom";
import { useState } from "react";


function Home(){

    const [card, setCard] = useState([]);

    return(
        
        <div className="layout">
        <Header card={card} setCard={setCard}/>
        <div className="layout-body">
            <Sidebar />
            <main className="main-content">
               <Outlet context={{card, setCard}} />
            </main>
        </div>
        
        </div>
    )
}




export default Home;