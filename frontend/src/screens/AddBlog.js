import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function AddBlog() {
  const [title, setTitle] = useState("")
  const [imgurl,setImgurl] = useState("")
  const [content,setContent] = useState("")

  function handleChangeTitle(e){
    setTitle(e.target.value)
  }

  function handleChangeContent(e){
    setContent(e.target.value)
  }

  function handleChangeImgurl(e){
    setImgurl(e.target.value)
  }

  function handleSubmit(){
      axios.post("http://localhost:8000/addblog",{
          "title":title,
          "imgurl":imgurl,
          "content":content
      }).then(function re(response){
          console.log(response.data)
      })
      window.location.href = "http://localhost:3000/myblogs"
  }
  return (
    <div>
    <Navbar/>
        <div class="container rounded bg-white mt-5 mb-5">
<div class="row">
  <div class="col-md-5 border-right">
      <div class="p-3 py-5">
          <div class="row mt-3">
              <div class="col-md-12"><label class="labels">title</label><input  type="text" class="form-control" onChange={handleChangeTitle} /></div>
              <div class="col-md-12"><label class="labels">image-url</label><input  type="text" class="form-control" onChange={handleChangeImgurl}  /></div>
              <div class="col-md-12"><label class="labels">content</label><input  type="text" class="form-control" onChange={handleChangeContent} /></div>
   
          </div>
          <div class="mt-5 text-center"><button onClick={handleSubmit} class="btn btn-primary profile-button" type="button">add blog</button></div>
      </div>
  </div>
</div>
</div>
</div>
  )
}

export default AddBlog