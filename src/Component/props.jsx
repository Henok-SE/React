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

export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games."
    },

  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}
