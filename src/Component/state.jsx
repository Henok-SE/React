// import React, { Component } from 'react'

// export class Subscribe extends Component {
//     constructor() {
//       super()
    
//       this.state = {
//          channel: "ElonTech"
//       };
//     }

//      changeMessage() {
//         this.setState({
//             channel: "Thank you for subscribing to "
//         });
//     }
    
//   render() {
//     return (
//       <div>
//         <h1>{this.state.channel}</h1>
//         <button onClick={() => this.changeMessage()}>Subscribe</button>
//       </div>
//     )
//   }
// }

// export default Subscribe


// state example with functional component
   import React, { Component } from 'react'
   
   export class state extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        state: "This is the initial state"
          
       }
     } 
      changeText(){
    this.setState({
        state: "The state has been updated!"
    })
      }

     render() {
       return (
         <div>
           <h1>{this.state.state}</h1>
           <button onClick={()=>this.changeText()}>Click Me</button>
         </div>
       )
     }
   }
   
   export default state
   
