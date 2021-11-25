import React from 'react'


const MyHOC = (OriginalComponent) => {
        const newComponent = (props) =>{
            
            return (
                <div className="wrapper">
                    < OriginalComponent {...props}/>
                </div>
            )
        }
        
    return newComponent;
};

export default MyHOC;