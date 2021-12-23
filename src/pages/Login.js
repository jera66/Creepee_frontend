import React, { useState } from 'react'
// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

    const login  = () => {
    fetch('http://localhost:3002/login', {
        method: 'post',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({
        email: email,
        password: password
        })
    })
        .then(response => response.json())
        .then(data => {
        if (data.error) {
            alert(data.error)
        } else {
            navigate('/')
        }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div  className="login-container">
            <div className="card  login-card">
                    <h2>Creepee</h2>
                    <input type='text' placeholder='Enter your email'  value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    <input type='password' placeholder='Enter your password'  value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <button  onClick={() => login()} className='btn-large  waves-effect waves-light  green'>Login</button>
            </div>
        </div>
    )
}

export default Login
