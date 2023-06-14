import React , {useContext} from "react";
import "./label.css";
import {MyContext} from "../pages/homepage";
function Label(props){
    const val = useContext(MyContext);
    const style = props.isActive ?{background: 'green'}:{background: 'orange'}
    if (val === false){
      return null;
    }
    return(
<div className="list-label">
          <span 
          onClick={ () => {
            props.onAction(props.isActive ? 'active':'nonactive');
          }}
          className="list-label-item" style={style}>
            {props.isActive ? 'active' : 'nonactive'}
          </span>
        </div>
    )
}
export default Label;