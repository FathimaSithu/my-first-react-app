import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ListItem from "./list/listitem";
import Header from "./shared/header";
import Footer from "./shared/footer";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <Header/>
    <div className="'app-body">
    <div className="app-list">
    <ListItem/>

    </div>
    </div>
    <Footer/>
  </div>
);

reportWebVitals();
