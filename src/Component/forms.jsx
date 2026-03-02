import React, { Component } from 'react'

 class Forms extends Component {
  
     constructor(props) {
       super(props)
     
       this.state = {
            username: "",
            comments: "",
       }
     }
     userHandler = (event) =>{
        this.setState({
            username: event.target.username,
        })
     }
        commentHandler = (event) =>{
            this.setState({
                comments: event.target.value
            })
        }

  render() {
    return (
    <form>
         <div>
              <label htmlFor="username">username : </label>
              <input type="text"  value={this.state.username} onChange={this.userHandler}/>
         </div>
         <div>
               <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.commentHandler}></textarea>
         </div>
    </form>
      
    )
  }
}

export default Forms

