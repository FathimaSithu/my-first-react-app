import React , {useContext,useState} from "react";
import "./label.css";
import {MyContext} from "../pages/homepage";
function Label(props){
    const val = useContext(MyContext);
    const [showTooltip,setShowTooltip]=useState(false);
    const style = props.isActive ?{background: 'green'}:{background: 'orange'}
      if (val === false){
      return null;
    }
    const handleMouseEnter = () => {
      setShowTooltip(true);
    }
    const handleMouseLeave = () => {
      setShowTooltip(false);
    }
    return(
<div className="list-label">
          <span 
          onClick={ () => {
            props.onAction(props.isActive ? 'active':'nonactive');
          }}
          className="list-label-item" style={style}>
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {props.isActive ? 'active' : 'nonactive'}
          </span>
          <label className= {`tooltip ${showTooltip ? 'show-tooltip' : 'hide-tooltip'}`}>
            This is  {props.isActive ? 'active' : 'nonactive'}tooltip
          </label>
        </div>
    )
}
export default Label;