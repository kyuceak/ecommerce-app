import "../styles/layout.css"
import Header from "./header";
import Sidebar from "./sidebar";
import MainPage from "./main-page";

function Layout(){







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




export default Layout;