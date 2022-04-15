import React, { Component } from 'react'
import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { selectUser } from '../userSlice'

export default function Navbar() {
  let user = useSelector(selectUser)
  useEffect(() => {
  })
  let item1;
  let item2;
  let item3;
  if(user.userReducer.email != null){
    item1 =        <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Home</a>
  </li>
    item2 =   <li class="nav-item">
    <a class="nav-link" href="#">My-Blogs</a>
  </li>
    item3 =   <li class="nav-item">
    <a class="nav-link" href="#">Profile</a>
  </li>
  }else{
    item1 =        <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
    item2 =   <li class="nav-item">
    <a class="nav-link" href="#">Sign up</a>
  </li>
    item3 =   <li class="nav-item">
    <a class="nav-link" href="#">Login</a>
  </li>
  }
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">artifiti</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  ml-auto">
        {item1}
        {item2}
        {item3}
      </ul>
    </div>
  </div>
</nav>
    )
}

