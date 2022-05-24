import React from 'react'
import './Header/Header.css'
import { withRouter, Route, Routes, Link} from 'react-router-dom';
import Homepage from './Homepage';

function Header(props) {

  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label forHtml="check" className="checkbtn">
    <i className="fas fa-bars"></i>
   </label>
   <div className='Nav-div'>
    <label className="logo" for="">Event-Management</label>
    <ul>
         <div>
            <li><a><Link className='nav-a' to='/homepage' style={{ textDecoration: 'none' }}>Home</Link></a></li>
            <li><a><Link className='nav-a' to="/" style={{ textDecoration: 'none' }}>Add Attendees</Link></a></li>
            <li><a><Link  className='nav-a' to="/about" style={{ textDecoration: 'none' }}>About</Link></a></li>
        </div>
        <div className='Attend'>
           
            <li><span className='Number'>0</span><a><Link className='nav-a nav-aa' to='/' style={{ textDecoration: 'none' }}>Attending</Link></a></li>
            <li><span className='Number'>0</span><a><Link className='nav-a  nav-aa' to='/' style={{ textDecoration: 'none' }}>Not Attending</Link></a></li>
        </div>
       
        
    </ul>
    </div>
</nav>
  )
} 

export default Header