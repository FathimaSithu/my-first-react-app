import React from "react";
import "./label.css";
function Label(props){
    
    const style = props.isActive ?{background: 'green'}:{background: 'orange'}
    return(
<div className="list-label">
          <span onClick={props.onAction} 
          className="list-label-item" style={style}>{props.isActive ? 'Active' : 'Nonactive'}</span>
        </div>
    )
}
export default Label;