import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class Blog extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
      <div><Navbar/></div>
    )
  }
}
