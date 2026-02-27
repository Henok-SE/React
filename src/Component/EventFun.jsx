import React from 'react'

function EventFun() {
    const Handler = () => {
         console.log("Button clicked!");
         alert("Button clicked!");
    }
     
  return (
    <div>
      <button onClick={Handler}> Click me</button>
    </div>
  )
}

export default EventFun;
