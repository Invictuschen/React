import React from 'react';
const Validation=(props)=>{
    let content = 'Text too short';
    if(props.count >= 5)
    {
        content = 'Text long enough';
    }
    return(
        <div> {props.count}  {content}</div>
    )
}
export default Validation;