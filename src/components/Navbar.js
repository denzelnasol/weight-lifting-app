import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar transparent navbar-expand-lg navbar-light navbar-inverse py-5" style={{fontSize:'2.25rem'}}>
        <a href='/' class="navbar-brand text-white" style={{fontSize:'2.25rem'}}>
          <img src='https://i.imgur.com/MIbcWOd.png' width="50" height="50" class="d-inline-block align-top" style={{paddingRight: '5%'}} alt="" />
          Exercises
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style={{paddingLeft:'2rem'}}>
            <li class="nav-item active">
              <a class="nav-link text-white" href='/calculator'>Calculator</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}