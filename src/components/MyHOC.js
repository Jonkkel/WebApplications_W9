import React from 'react'


const MyHOC = (OriginalComponent) => {
        const newComponent = (props) =>{
            
            return (
                <div className="wrapper">
                    < OriginalComponent name={props.name} {...props}/>
                </div>
            )
        }
        
    return newComponent;
};

export default MyHOC;