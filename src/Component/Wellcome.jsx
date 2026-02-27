import React from 'react';
const Wellcome  = () => {
    // return (
    // <div>
    //     <h1>Wellcome to ElonTech</h1>
    // </div>
    // );

// without jsx 
 return React.createElement(
    'div', 
    null,
     React.createElement("h1", null , "Wellcome to ElonTech") );

}

       
    
 



export default Wellcome;