import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar({loggedIn, logOutUser}) {
  function handleLogout(e){
    e.preventDefault()
    logOutUser()
  }
  return (
    <div>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            {!loggedIn? (
              <div>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="login">Login</Link></li> 
            </div>) :
            <li><a href="#" onClick={handleLogout}>Logout</a></li> 
            }
        </ul>
    </div>
  )
}
