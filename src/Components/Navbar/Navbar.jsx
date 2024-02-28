import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
      <Link className={"navbar-brand "+ styles.title} to="/">Cinematic</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <i className='fa-solid fa-bars main-color'></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/trends">Trending</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/actors">Actors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">Search</NavLink>
          </li>
        </ul>      
      </div>
    </div>
  </nav>
  )
}
