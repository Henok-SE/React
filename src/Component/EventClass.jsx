import React, { Component } from 'react'

 class EventClass extends Component {
  render() {
    const Handler = () => {
        console.log("Button clicked!");
        alert("Button clicked!");
    }
    return (
      <div>
        <button onClick={() =>Handler()}>Majic</button>
      </div>
    )
  }
}

export default EventClass;
