import React from "react";
import ListItem from "./listitem";
const obj = {
    title: "Appointment in october",
    descr: "The patient is reschedued to november",
    isActive: false
};
function List(){
    return(<div className="app-list">
    <ListItem obj={obj}/>
    </div>
    )
    
}
export default List;