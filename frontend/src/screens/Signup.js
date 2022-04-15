import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { addusername, addemail, addpassword , selectUser } from '../userSlice'

export default function Signup(){
  const [name, setName] =useState("")
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  const dispatch = useDispatch()
  const users = useSelector(selectUser)


  function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:8000/register",{
      name:name,
      email:email,
      password:password
    }).then(function(response){
      let user = response.data[0].fields
      console.log("ok")
      dispatch(addusername(user.name))
      dispatch(addemail(email))
      dispatch(addpassword(password))
      console.log("double ok")
      console.log(users)
      window.location.href = "http://localhost:3000";
    }) 
  }
  
  function handleChangeName(e){
    setName(e.target.value)
  }
  
  function handleChangeEmail(e){
    setEmail(e.target.value)
  }
  function HandleChangePassword(e){
    setPassword(e.target.value)
    console.log(password)
  }

    return (
      <div>
        <Navbar/>
        <h1 style={{textAlign:'center'}}>Signup</h1>
        <form style={{width:"40%",marginLeft:"30%", marginTop:"3%",textAlign:"center"}} onSubmit={handleSubmit}>
        <div  class="form-group">
    <label for="email">Name:</label>
    <input  value={name} onChange={handleChangeName} class="form-control"/>
  </div>
  <div  class="form-group">
    <label for="email">Email address:</label>
    <input  value={email} onChange={handleChangeEmail} class="form-control" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" value={password} onChange={HandleChangePassword} class="form-control" id="pwd"/>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
      </div>
    )
}
