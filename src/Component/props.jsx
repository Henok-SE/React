    //Functional props component
// import React from 'react';
// const Fullname = (props) => {
//     return (
//     <>
//       <h1>{props.name} Assefa {props.Age}</h1> 
//        {props.children}
//     </>
// );
// }
 
// export default Fullname;

//Class props component
import React, { Component } from 'react'

export default class props extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} Assefa {this.props.Age}</h1>
        {this.props.children}
      </div>
    )
  }
}
