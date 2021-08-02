import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar transparent navbar-inverse py-5">
        <span class="navbar-inner text-white text-large">Excercises</span>
      </nav>
    )
  }
}