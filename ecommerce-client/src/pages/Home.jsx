import "../styles/layout.css"
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import MainPage from "../components/main-page";

function Home(){







    return(
        <div className="layout">
        <Header />
        <div className="layout-body">
            <Sidebar />
            <main className="main-content">
                <MainPage/>

            </main>
        </div>
        
        </div>
    )
}




export default Home;