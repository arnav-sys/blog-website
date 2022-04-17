import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectUser } from '../userSlice'
import { useEffect } from 'react'
import { useState } from 'react'

function Blog() {
  const data = useSelector(selectUser)
  const [state,setState] = useState({})

  let index = data.userReducer.urlindex
  useEffect(() => {
    axios.get("http://localhost:8000/allblogs").then(function(response){
      setState(response.data[index])
      console.log(state)
    })
  })
  return (
    <div>
      <Navbar/>
      <div className=' d-flex justify-content-center m-5 '><img className='img-fluid ' src={state.fields ? state.fields.imgurl: ''} ></img></div>
      <div className=' d-flex justify-content-center'><h1>{state.fields ? state.fields.title: "loading" }</h1></div>
      <div className=' d-flex justify-content-center m-5'><h4>{state.fields ?state.fields.content: "" }</h4></div>
    </div>
  )
}

export default Blog