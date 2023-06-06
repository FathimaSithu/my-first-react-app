import React from "react";
// import ListItem from "./listitem";
import Tools from "../components/tools";
import SimpleList from "./simplelist";
const arr = [
    {
      id:1,
      title: "Appointment in october",
      descr: "The patient is rescheduled to november",
      isActive: false,
    },
    {
      id:2,
      title: "Appointment in november",
      descr: "The patient is rescheduled to december",
      isActive: true,
    },
    {
      id:3,
      title: "Appointment in december",
      descr: "The patient is rescheduled to december",
      isActive: false,
    },
  ];
  
  class List extends React.Component {

    constructor(props){
        super(props);

        this.state={
            data:arr,
            activeState:'all'
                };
    }

   

    handleLabel
    onListChange= (evt) => {
      console.log(evt.target.value);
      const value = evt.target.value;
    
    this.setState({
        activeState:value
    });
       }
       handleDelete = (item) => {
        console.log('delete',item);
        const newList = this.state.data.filter((element) => element.id !== item.id);
        this.setState({
          data: newList
        });
       }
       handleLabelClick = (arg) => {
this.setState({
  activeState:arg
});
       }
  
    render() {
        const{
            data,
            activeState
        }=this.state;
          const newList = data.filter((item) => {
        if (activeState === "all") {
          return true;
        }
        if (activeState === "active") {
          return item.isActive === true;
        }
        if (activeState === "nonactive") {
          return item.isActive === false;
        }
        return false;
      });
      return (
        <Tools labelValue ={activeState} onAction={this.onListChange}>
          <SimpleList onLabelClick={this.handleLabelClick} data = {newList} onAction={this.handleDelete}/>
          
        </Tools>
      );
    }
  }
  
  export default List;
  