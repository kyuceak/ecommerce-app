

import { Link } from "react-router-dom";


function Sidebar() {
  return <div className="sidebar">
    <ul>
        <li> <Link to="/home" className="custom-link">Home</Link></li>
        <li><Link to="/shop" className="custom-link">Shop</Link></li>
        
    </ul>
  </div>;
}

export default Sidebar;
