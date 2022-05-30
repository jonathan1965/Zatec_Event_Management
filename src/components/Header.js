import React from 'react'
import './Header/Header.css'
import { useSelector } from 'react-redux';
import { withRouter, Route, Routes, Link} from 'react-router-dom';
import Homepage from './Homepage';

function Header(props) {
  const EventList = useSelector((state)=>state.Event.EventList);
  console.log ('header props', EventList)

  let attending = 0;
  let nonattending = 0;
  EventList.forEach((item)=>{
    if(item.status === "Attending"){
      attending = attending + 1;
    }else{
      nonattending = nonattending + 1;
    }
    
  })
  console.log(nonattending, attending)


  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label forHtml="check" className="checkbtn">
    <i className="fas fa-bars"></i>
   </label>
   <div className='Nav-div'>
   <label className="logo logo1"><Link to="/" style={{ textDecoration: 'none', color:'white' ,background:'none' }}>Event-Management</Link></label>
    <ul>
         <div>
            <li><a><Link className='nav-a' to='/homepage' style={{ textDecoration: 'none' }}>Home</Link></a></li>
            <li><a><Link className='nav-a' to="/addAttedees" style={{ textDecoration: 'none' }}>Add Attendees</Link></a></li>
            <li><a><Link  className='nav-a' to="/about" style={{ textDecoration: 'none' }}>Contact</Link></a></li>
        </div>
        <div className='Attend'>
            <li><span className='Number'>{attending}</span><a><Link className='nav-a nav-aa' to='/' style={{ textDecoration: 'none' }}>Attending</Link></a></li>
            <li><span className='Number'>{nonattending}</span><a><Link className='nav-a  nav-aa' to='/' style={{ textDecoration: 'none' }}>Not Attending</Link></a></li>
        </div>
       
        
    </ul>
    </div>
</nav>
  )
} 

export default Header