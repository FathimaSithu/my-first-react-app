import React from "react";
import ListItem from "./listitem";
import Tools from "../components/tools";
const arr = [
    {
      title: "Appointment in october",
      descr: "The patient is rescheduled to november",
      isActive: false,
    },
    {
      title: "Appointment in november",
      descr: "The patient is rescheduled to december",
      isActive: true,
    },
    {
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

   

    onListChange= (evt) => {
      console.log(evt.target.value);
      const value = evt.target.value;
    //   const newList = arr.filter((item) => {
    //     if (value === "all") {
    //       return true;
    //     }
    //     if (value === "active") {
    //       return item.isActive === true;
    //     }
    //     if (value === "nonactive") {
    //       return item.isActive === false;
    //     }
    //     return false;
    //   });
     
    //   this.setState( (state) => {
    //     return{
    //         data:newList
    //     }
      
     
    //   }

    //   );
    this.setState({
        activeState:value
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
        <Tools onAction={this.onListChange}>
          <div className="app-list">
            {
            newList.map((obj) => (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
              />
            ))}
          </div>
        </Tools>
      );
    }
  }
  
  export default List;
  