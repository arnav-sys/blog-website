import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function trys(){
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/allblogs").then((response) => {
            setPost(response.data)
            console.log(this.state.posts)
          })
    })
    const style = {
        width:"25rem"
      }
      const blogstyle = {
        marginTop:"2%"
      }
  
      const btnstyle = {
        border:"none"
      }
  
      function handleUrl(){}
  return (
    <div>
    <Navbar/>
    <div className='main'>
    <h1>All Blogs</h1>
    <div style={blogstyle} class="row row-cols-1 row-cols-md-3 g-4">
      {this.state.posts.map((value,index) => {
          return <div class="col">
          <div class="card" style={style}>
            <img src={value.fields.imgurl} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{value.fields.title}</h5>
              <p class="card-text">Author: {value.fields.user}</p>
              <button onClick={handleUrl} className='btn btn-primary' style={btnstyle}><a href={"/blog/" + index} class="btn btn-primary">Go to blog</a></button>
            </div>
          </div>
        </div>
      })}

</div>
    </div>
  </div>
  )
}

export default trys