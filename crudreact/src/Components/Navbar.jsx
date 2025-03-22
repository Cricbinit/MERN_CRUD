import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='container-fluid p-3 bg-danger text-center' style={{height:"120px", display:"flex", justifyContent:"space-evenly", alignItems:"center", fontSize:"30px"}}>
        <Link to="/add" className='ms-5 text-white text-decoration-none fw-bold'>Add Employee</Link>
        <Link to="/emplist" className='ms-5 text-white text-decoration-none fw-bold'>Employee List</Link>
    </nav>
  )
}

export default Navbar
