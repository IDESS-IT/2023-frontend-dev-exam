import React from "react";
import './SideBar_Style.css';
import { SideBar_Menu } from "./SideBar_Menu";

function SideBar() {
    return (<div className="Sidebar">
        <ul>
        {SideBar_Menu.map((val, key) => {
        return (
        <li key={key} className="SideBar-MenuItems">

        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
        </li>
        );
        })}
        </ul>
        </div>
    );
}

export default SideBar