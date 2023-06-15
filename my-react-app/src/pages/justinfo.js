import React from "react";
function JustInfo(props){
    const {
        showLabel,
        testValue
    } = props;
    return(
     <div>
        JUST INFO{showLabel}{testValue.activeStatejnki}
     </div>   
    )
}

export default React.memo(JustInfo);