import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function  NavBar() {
    return (
        <nav>
            <div className="nav-wrapper  green">
                <Link to="/" className="brand-logo left">Creepee</Link>
                <ul id="nav-mobile"   className="right">
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/post">Post</Link></li>
                </ul>
            </div>
    </nav>

    )
}

export default NavBar
