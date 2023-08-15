import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
   
      <ul>
  
      <li><Link to='/' style={{textDecoration: 'none',color:'white'}}>Home</Link></li>
      <li><Link to='/about'style={{textDecoration: 'none',color:'white'}}>About</Link></li>
      <li><Link to='/portfolio'style={{textDecoration: 'none',color:'white'}}>Portfolio</Link></li>
      <li><Link to='/contact'style={{textDecoration: 'none',color:'white'}}>Contact</Link></li>
      
      </ul>
    </div>
  )
}

export default Nav
