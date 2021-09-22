import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function Navbar(pro) {
  
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${pro.mode} bg-${pro.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{pro.text}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">{pro.set}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-a disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class="form-check form-switch">
  <input onClick={pro.toggleMode} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
    <label style={{color: pro.change === 'Enable light Mode'?"white" : "black"}} class={`form-check-label text-`} htmlFor="flexSwitchCheckDefault">{pro.change}</label>
  
  <div>
  <input onClick={pro.toggleMode1} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label style={{color: pro.change1 === 'Enable light Mode'?"white" : "green"}} class={`form-check-label text-`} htmlFor="flexSwitchCheckDefault">{pro.change1}</label>

    </div>
  <input onClick={pro.toggleMode2} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label style={{color: pro.change2 === 'Enable light Mode'?"white" : "#4c5eb5"}} class={`form-check-label text-`} htmlFor="flexSwitchCheckDefault">{pro.change2}</label>
</div>
    </div>
  </div>
</nav>
      </>
    )
}
Navbar.prototype = {
    text: PropTypes.string.isRequired,
    set: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    text : 'Textutils',
    set: 'About'
}
