import React, { Component } from 'react'
import "./style.css"
import Navbar from '../components/Navbar'
import axios from "axios"
import { addurlindex } from '../userSlice'

export default class Main extends Component {
  constructor(props){
      super(props)
      this.state = {
        posts : []
      }
      this.handlelink = this.handlelink.bind(this)
  }

  handlelink(index){
    console.log(this.props)
    this.props.dispatch(addurlindex(index))
  }
  componentDidMount(){
    axios.get("http://localhost:8000/allblogs").then((response) => {
      this.setState({posts:response.data})
    })
  }
  render() {
    const style = {
      width:"25rem"
    }
    const blogstyle = {
      marginTop:"2%"
    }



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
                  <button className='btn btn-primary' onClick={this.handlelink}>  <a href={"/blog/" + index} class="btn btn-primary">Go to the blog</a></button>
                </div>
              </div>
            </div>
          })}
 
</div>
        </div>
      </div>
    )
  }
}