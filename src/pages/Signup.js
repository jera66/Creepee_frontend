import React, {useState} from 'react'
import  {useNavigate} from 'react-router-dom'
import './Signup.css'

function Signup() {
    const navigate = useNavigate()
    const [fullName,  setFullName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const  register  = () => {
            fetch("http://localhost:3002/register",  {
                method:  'post',
                headers: {
                        "content-type": "application/json"
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password
                })
            }).then(response=>response.json())
            .then(data=>{
              if(data.error){
                  alert(data.error)
              }else{
                  navigate('/login')
              }
            })
    }
  return (
    <div className='login-container'>
      <div className='card  login-card'>
        <h2>Creepee</h2>
        <input type='text' placeholder='Enter your full name'  value={fullName} onChange={(event)=>setFullName(event.target.value)} />
        <input type='text' placeholder='Enter your email'  value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <input type='password' placeholder='Enter your password'  value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <button  onClick={() => register()}  className='btn-large  waves-effect waves-light  green'>Sign Up</button>
      </div>
    </div>
  )
}

export default Signup