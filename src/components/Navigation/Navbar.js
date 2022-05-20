import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="login">Login</Link></li>
        </ul>
    </div>
  )
}
