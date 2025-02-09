
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'

const Navbar = () => {

const[sticky,setSticky]=useState(false);
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY>50?setSticky(true):setSticky(false)
  })
},[])


  return (
    <nav className={`container ${sticky?'dark-nav':""}`}>
        <img className='logo' src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Program</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact us</button></li>
            
        </ul>
      
    </nav>
  )
}

export default Navbar
