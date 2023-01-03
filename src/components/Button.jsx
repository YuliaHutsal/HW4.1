import React from "react";

export default function Button (props){
    return(
        <button className="Button" onClick={props.isVisible}>Click Me</button>
    )
}