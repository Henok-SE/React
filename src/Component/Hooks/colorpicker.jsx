const { useState } = React;


export const ColorPicker = () => {
     const [selectColor, setSelectColor] =useState("#ffffff");
     function handleColor(e){
       setSelectColor=e.target.value;
     }
     return(
          <div id="color-picker-container" style={{backgroundColor:"white"}}>
               <input type="color" id="color-input" value={selectColor} onChange={ e => setSelectColor({background:e.target.value})}></input>
       </div>
     );
};
 