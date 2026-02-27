import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            message: "Hello",
      }
       this.Handler = this.Handler.bind(this);
    }

    Handler (){
        this.setState({
            message: "Welcome to React",
        })
       
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.Handler.bind(this)}>Change</button> */}
        {/* <button onClick={()=>this.Handler()}>Change</button> */}
        <button onClick={this.Handler}>Change</button>
      </div>
    )
  }
}

export default EventBinding
