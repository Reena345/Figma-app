import React from 'react'
import logo from './assets/Group 1.png'

function Header() {
  return (
    <div className="container mb-5 pb-5">
  <nav className="navbar navbar-expand-lg  rounded align-items-center" aria-label="Thirteenth navbar example">
      <div className="container-fluid ">
        <button className="navbar-toggler mb-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" 
           aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex align-items-center" id="navbarsExample11">
          <a className="navbar-brand col-lg-3 my-5 " href="#"> <img src={ logo} alt="" /></a>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center pb-5">
            <li className="nav-item">
              <a className="nav-link active px-4 text-black" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 text-black " href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 text-black" aria-disabled="true">Contact Us</a>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-end pb-5">
          <button type="button" className="border-0 bg-white me-2">Login</button>
         <button type="button" className="btn bg-warning text-white rounded-5">Book Scooter</button>
          </div>
        </div>
      </div>
    </nav>
      
    </div>
    
  )
}

export default Header
