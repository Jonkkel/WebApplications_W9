import React from 'react'


const MyHOC = (OriginalComponent, props) => {
        const newComponent = () =>{
            
            return (
                <div className="wrapper">
                    < OriginalComponent {...props}/>
                </div>
            )
        }
        
    return newComponent();
};

export default MyHOC;