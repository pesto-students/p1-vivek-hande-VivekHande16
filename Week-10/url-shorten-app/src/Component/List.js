import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/ListStyles.css'

function List() {
  return (
   <header>
        <div className='container container-flex'>
            <div className='logo'>
                <h1>Shortly</h1>
            </div> 
            <nav>
                <div>
                    <NavLink to='/' className='listItem' activeClassName='active'>Home</NavLink>
                    <NavLink to='/features' className='listItem' activeClassName='active'>Features</NavLink>
                    <NavLink to='/pricing' className='listItem' activeClassName='active'>Pricing</NavLink>
                    <NavLink to='/resources' className='listItem' activeClassName='active'>Resources</NavLink>                 
                </div>
            </nav> 
            <div className='signin'>
                    <NavLink to='/login' className='listItem' activeClassName='active'>Login</NavLink>
                    <NavLink to='/signup' className='listItem' activeClassName='active'>Sign Up</NavLink>  
            </div>
        </div> 
   </header>
  )
}

export default List