import React from "react";
import { MyContext,MyNewContext } from "../pages/mycontext";
class Label2 extends React.Component {
  render() {
    const props = this.props;
    const style = props.isActive
      ? { background: "green" }
      : { background: "orange" };
    return (
       
<MyContext.Consumer>
        {(val) => {
            if (val === false){
                return null;
              }
              
          return (
            <div className="list-label">
              <span
                onClick={() => {
                  props.onAction(props.isActive ? "active" : "nonactive");
                }}
                className="list-label-item"
                style={style}
              >
                {props.isActive ? "active" : "nonactive"}
              </span>
            </div>
          );
        }}
      </MyContext.Consumer>

                    );
  }
}
Label2.contextType = MyNewContext;
export default Label2;
