import React from 'react'
import './NavBar.css'
function  NavBar() {
    return (
        <nav>
            <div className="nav-wrapper  green">
                <a href="/"className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </div>
    </nav>

    )
}

export default NavBar
