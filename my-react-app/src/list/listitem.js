import React from "react";
import Label from "./label";

function ListItem(props){
    const{
        title,
        descr,
        isActive
    } = props;
    return(<div className="list-item">
    <hr />
    <div className="list-title">
      <h4>{title} </h4>
    </div>
    <div className="list-descr">
      <p>{descr}</p>
    </div>
    <Label isActive={isActive}/>
    <hr/>
  </div>)
  
  }
  export default ListItem;