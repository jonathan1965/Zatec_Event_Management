import React from 'react'
import './Header/Header.css'
function Header() {
  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkbtn">
    <i class="fas fa-bars"></i>
   </label>
    <label className="logo" for="">Event-Management</label>
    <ul>
        <li><span className='Number'>0</span><a className="active" href="">Attending</a></li>
        <li><span className='Number'>0</span><a href="">Not Attending</a></li>
    </ul>
</nav>
  )
}

export default Header