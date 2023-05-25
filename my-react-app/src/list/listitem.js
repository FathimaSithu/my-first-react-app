import React from "react";
import Label from "./label";

function ListItem(props){
    return(<div className="list-item">
    <hr />
    <div className="list-title">
      <h4>{props.obj.title} </h4>
    </div>
    <div className="list-descr">
      <p>{props.obj.descr}</p>
    </div>
    <Label isActive={props.obj.isActive}/>
    <hr/>
  </div>)
  
  }
  export default ListItem;