import React from 'react'
import '../Css/FooterStyle.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className='container-footer'>
        <nav>
            <div>
                <NavLink to='/aboutus' className='listItem'>About us</NavLink>
                <NavLink to='/contactus' className='listItem'>Contact us</NavLink>
                <NavLink to='/social' className='listItem'>Social</NavLink>
                <NavLink to='/careers' className='listItem'>Careers</NavLink>   
                <NavLink to='/analytics' className='listItem'>Analytics</NavLink>              
            </div>
        </nav> 
            <div className='copyright'>
                <p>All rights reserved &copy;</p>
                <p>Shortly.Inc</p>   
            </div>
        </div>
    </footer>
  )
}

export default Footer