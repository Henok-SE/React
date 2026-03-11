import { useRef } from "react";

const Focus = () =>{
    const inputRef = useRef(null);

    const handleFocus = () =>{
        inputRef.current.focus();
    }
};

   return (
       <div>
           <input ref={inputRef} type="text" placeholder="Click the button to focus the input" />
           <button onClick={handleFocus}>Focus Input</button>
       </div>
   );

export default Focus;