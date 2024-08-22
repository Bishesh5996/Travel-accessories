import React from 'react';
import './SideBar.css';
import {Link} from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
          
            <Link to='/admin/accessories list'><button className="sidebar-button">Accessories List</button></Link>
            <Link to='/admin/userlist'><button className="sidebar-button">User List</button></Link>
        
            <Link to='/admin/accessoriesbookinglist'><button className="sidebar-button">Car Booking List</button></Link>
        </div>
    );
};

export default Sidebar;
