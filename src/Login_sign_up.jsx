import axios from 'axios'
import { useState } from 'react'


const Login_sign_up =()=>{
    const [username, setUsername] = useState("")
const [message, setMessage] = useState("")
    return(<><h1>Login</h1>
    Write your username <input onChange={(e)=>{setUsername(e.target.value)}}></input>
    <button onClick={()=>{axios.get(`https://great-news.onrender.com/api/users/${username}`
    
    ).then((res)=>{console.log(res)}).catch((error)=> {
        setMessage("This user doesn't exist")
      });}}>Login</button>
      <h2>{message}</h2>
    </>)
}
export default Login_sign_up