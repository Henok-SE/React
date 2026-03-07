import React from 'react'
import { useState } from 'react'

function UseStateObj() {
    const [name, setName] = useState({FName: "", LName: ""});
  return (
    <div>
      <form>
        <input type="text" value={name.FName} onChange={e => setName({...name, FName: e.target.value})}/>
        <input type="text" value={name.LName} onChange={e => setName({...name, LName: e.target.value})}/>
        <h2>Your First name is  {name.FName}</h2>
        <h2>Your Last name is  {name.LName}</h2>
      </form>
    </div>
  )
}

export default UseStateObj
