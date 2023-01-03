import React, {useEffect} from "react";

export default function Alert (props){
    let alertStyle = props.hiddenStyle;
    useEffect(() => {alertStyle? alert("Alert was openned"): alert("Alert is closed")}, [alertStyle]);

    return(
        <div>
            <span className={"Text" + (alertStyle? alertStyle : "")}>Press button again</span>
        </div>
    )
}