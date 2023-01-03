import React, {useState} from "react";
import Alert from './Alert';
import Button from './Button';

export default function Container(){
    const [isVisible, setVisibility] = useState(true);

    const isElemVisible = () =>{
        setVisibility(!isVisible);
    }
    return(
        <div>
            {isVisible? <Alert/> : <Alert hiddenStyle="Alert-hidden"/>}
            <Button isVisible={isElemVisible}/>
        </div>
    )
}