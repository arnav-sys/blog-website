import React, { Component } from 'react'
import "./style.css"
import Navbar from '../components/Navbar'
import axios from "axios"
import { connect } from 'react-redux'
import { addediturlindex } from "../userSlice"

export class MyBlogs extends Component {
  constructor(props){
      super(props)
      this.state = {
        posts : []
      }
  }
  componentDidMount(){
    axios.get("http://localhost:8000/myblogs").then((response) => {
      this.setState({posts:response.data})
      console.log(this.state.posts)
    })
  }
  render() {
    const style = {
      width:"25rem"
    }
    const blogstyle = {
      marginTop:"2%"
    }
    const blogstyles = {
      marginRight:"50%",
      marginTop:"5%"
    }

    console.log(this.state.posts)


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
                  <button className='btn btn-primary' onClick={() => {this.props.addurlindex(index)}}> <a href={"/blog/" + index} class="btn btn-primary">Go to the blog</a></button>
                </div>
              </div>
            </div>
          })}
          <div style={blogstyles} class=""><button className='btn btn-primary'> <a href={"/addblog/" } class="btn btn-primary">add new blog</a></button></div>
</div>
        </div>
      </div>
    )
  }
}

export default connect(null, {addediturlindex}
  )(MyBlogs)