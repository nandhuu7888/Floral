import React from 'react'
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className='Register'>
    <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>FirstName</label>
        <input className="RegisterInput" type="text" placeholder="Enter your Name" />
        <label>Contact Number</label>
        <input className="RegisterInput" type="text" placeholder="Enter your Number" />
         <label>Address</label>
         <input className="RegisterInput" type="text" placeholder="Enter your Address" />
        </form>
       
      <br></br>
     
      <Link to ='/Products'><button>Register</button></Link>
       
     
    </div>
  )
}

