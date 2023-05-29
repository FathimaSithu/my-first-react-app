import React from "react";
import ListItem from "./listitem";
const obj = {
    title: "Appointment in october",
    descr: "The patient is reschedued to november",
    isActive: false
};
function List(){
    return(
    <div className="app-list">
    <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
    </div>
    )
    
}
export default List;