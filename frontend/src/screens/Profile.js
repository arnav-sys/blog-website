import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectUser } from '../userSlice'

function Profile() {
    let user = useSelector(selectUser)
    const [password,setPassword] = useState(user.userReducer.password)
    //useEffect(() => {
      //setPassword(user.userReducer.password)
    //})

    function handleChangePassword(e){
        console.log(e.target.value)
        setPassword(e.target.value)
        console.log(password)
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.put("http://localhost:8000/resetpassword",{
            name:user.userReducer.username,
            newpassword:password
        }).then(function responses(response){
            let user = response.data[0].fields
            console.log(user)
            console.log(password)
        })

    }
  return (
      <div>
          <Navbar/>
              <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">username</label><input  type="text" class="form-control" placeholder="" value={user.userReducer.username}/></div>
                    <div class="col-md-12"><label class="labels">email address</label><input  type="text" class="form-control" placeholder="enter address line 1" value={user.userReducer.email}/></div>
                    <div class="col-md-12"><label class="labels">password</label><input  type="text" class="form-control" onChange={handleChangePassword} placeholder={password}/></div>
         
                </div>
                <div class="mt-5 text-center"><button onClick={handleSubmit} class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
      </div>
  )
}

export default Profile