import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { sidebarMenu } from '../../navigations/Routes';
import Header from './Header';
import './sidebar.scss';
import { sidebarStore } from '../../stores/sideStore';

const Sidebar = () => {
    return (
        <div className="container">
            <aside id="sidebar" className={sidebarStore.openMenus ? "sidebar-responsive" : ""}></aside>
            <div className="sidebar">
                <div className='logo1'>
                    <h1 className='sidebar-logo'>Q</h1>
                </div>
                {sidebarMenu.map((restaurant, index) => (
                    <div className="restaurant" key={index}>
                        <h3 className="restaurant-name">{restaurant.name}</h3>
                        <ul className="menu-list">
                            {restaurant.routes.map((route, i) => (
                                <li className="menu-item" key={i}>
                                    <div className="menu-item-content">
                                        {route.icon} {/* Render the icon */}
                                        <NavLink to={`/sidebar/${route.path}`}>{route.name}</NavLink>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="content-column">
                <Header />
                <main className='main-class'>
                <Outlet />
                </main>
               
            </div>
        </div>
    );
}

export default Sidebar;
