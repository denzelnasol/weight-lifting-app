import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar transparent navbar-expand-lg navbar-light navbar-inverse py-5" style={{fontSize:'2.25rem'}}>
        <a href='/' className="navbar-brand text-white" style={{fontSize:'2.25rem'}}>
          <img src='https://i.imgur.com/MIbcWOd.png' width="50" height="50" className="d-inline-block align-top" style={{paddingRight: '5%'}} alt="" />
          Exercises
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{paddingLeft:'2rem'}}>
            <li className="nav-item active">
              <a className="nav-link text-white" href='/calculator'>Calculator</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}