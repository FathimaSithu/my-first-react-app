import React from "react";
import "./addnew.css";
class AddNew extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titleInput : ''
        }
        }
        handleChange = (evt) => {
            const value = evt.target.value;
            this.setState({
                titleInput:value
            })
        }
        handleClick = () => {
            console.log(this.state.titleInput);
        }
    
    render(){
        return(
<div className="add-new">
    <input onChange={this.handleChange}/>
    <button onClick={this.handleClick}>CLick</button>
</div>
        );
    }
}
export default AddNew;