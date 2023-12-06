import React from "react";
import './SideBar_Style.css';
import { SideBar_Menu } from "./SideBar_Menu";


function SideBar() {
    return (
        
        <div className="Sidebar">
            <div className="cms-logo">
                <img src="https://www.scientificindustries.com/media/wysiwyg/icon_employment_opportunities.png" alt="CMS"></img>
                <h1>CMS</h1>
            </div>

        <ul>
        {SideBar_Menu.map((val, key) => {
        return (
        <li key={key} className="SideBar-MenuItems">

        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
        <div id="icon2">{val.icon2}</div>
        </li>
        );
        })}
        </ul>
        </div>
    );
}

export default SideBar