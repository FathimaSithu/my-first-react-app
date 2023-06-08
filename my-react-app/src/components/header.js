import React from "react";
import "./header.css";
function Header(props) {
  const { onMenuSelect } = props;
  return (
    <div className="app-header">
      <span className="header-title">My first react app</span>
      <span
        onClick={() => {
          onMenuSelect("home");
        }}
      >
        Home
      </span>
      <span
        onClick={() => {
          onMenuSelect("contacts");
        }}
      >
        Contacts
      </span>
      <span
        onClick={() => {
          onMenuSelect("settings");
        }}
      >
        Settings
      </span>
      <span
        onClick={() => {
          onMenuSelect("logout");
        }}
      >
        Logout
      </span>
    </div>
  );
}
export default Header;
