import React from "react";
import "./header.css";
function Header(){
    return(
        <div className="app-header">
      <span className="header-title">My first react app</span>
      <span>Home</span>
      <span>Contacts</span>
      <span>Settings</span>
      <span>Logout</span>
    </div>
    )
}
export default Header;