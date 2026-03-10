import React, { useState } from "react";


export const ColorPicker = () => {
     const [selectColor, setSelectColor] =useState("#ffffff");
    //  function handleColor(e){
    //    setSelectColor(e.target.value);
    //  }
     return(
          <div id="color-picker-container" style={{backgroundColor:selectColor}}>
               <input type="color" id="color-input" value={selectColor} onChange={ (e)=> setSelectColor(e.target.value)}></input>
       </div>
     );
};
 