import React from "react";
import "./label.css";
function Label(props){
    
    const style = props.isActive ?{background: 'green'}:{background: 'orange'}
    return(
<div className="list-label">
          <span 
          onClick={ () => {
            props.onAction(props.isActive ? 'Active':'Non-active');
          }}
          className="list-label-item" style={style}>
            {props.isActive ? 'Active' : 'Non-active'}
          </span>
        </div>
    )
}
export default Label;