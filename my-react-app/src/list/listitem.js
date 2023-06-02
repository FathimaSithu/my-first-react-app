import React from "react";
import Label from "./label";
import "./listitem.css";

function ListItem(props) {
  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h4>{props.title} </h4>
      </div>
      <div className="list-descr">
        <p>{props.descr}</p>
      </div>
      <Label onAction={() => {
        console.log('PARENT Clicked');
      }} isActive={props.isActive} />
           
      <hr />
    </div>
  );
}
export default ListItem;
