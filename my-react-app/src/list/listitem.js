import React from "react";
import Label from "./label";
import "./listitem.css";

function ListItem(props) {
  const{
    title,
    descr,
    isActive,
    onDelete,
    onLabelClick
  }=props;
  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h4>{title} </h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list-descr">
        <p>{descr}</p>
      </div>
      <div className="list-label">
      <Label isActive={isActive} onAction={onLabelClick} />
      </div>
      
           
      <hr />
    </div>
  );
}
export default ListItem;
