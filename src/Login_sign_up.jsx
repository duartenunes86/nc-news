import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './contexts/Users'
import { useContext } from 'react';


const Login_sign_up =({navigate})=>{
    const [username, setUsername] = useState("")
    const {user,setUser}=useContext(UserContext)
const [message, setMessage] = useState("")
    return(<><h1>Login</h1>
    Write your username <input onChange={(e)=>{setUsername(e.target.value)}}></input>
    <button onClick={()=>{axios.get(`https://great-news.onrender.com/api/users/${username}`
    
    ).then((res)=>{setUser(res.data.user) 
        navigate("/")
       
        }).catch((error)=> {
        setMessage("This user doesn't exist")
      });}}>Login</button>
      <h2>{message}</h2>
     <Link to="/signup"> <h3>If you are not registered, sign up here</h3></Link>
    </>)
}
export default Login_sign_up