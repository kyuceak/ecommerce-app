import "../styles/layout.css"
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import MainPage from "../components/main-page";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Outlet } from "react-router-dom";

function Home(){

    return(
        <div className="layout">
        <Header />
        <div className="layout-body">
            <Sidebar />
            <main className="main-content">
               <Outlet />
            </main>
        </div>
        
        </div>
    )
}




export default Home;