import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "./contexts/Users"





const Signup = ({navigate}) =>{
    const [message, setMessage] = useState("")
    const[userToGive, setUserToGive]=useState("")
    const[nameToGive, setNameToGive]=useState("")
    const[avatarToGive, setAvatarToGive]=useState("")
    const {user,setUser}=useContext(UserContext)
return(
<>
<h1>Sign up</h1>
username <input onChange={(e)=>{setUserToGive(e.target.value)}}></input>
name <input onChange={(e)=>{setNameToGive(e.target.value)}}></input>
avatar url <input onChange={(e)=>{setAvatarToGive(e.target.value)}}></input>
<button onClick={(event)=>{
   
        axios.post(`https://great-news.onrender.com/api/users/`, {
          username: userToGive,
          name: nameToGive,
          avatar_url: avatarToGive
        })
          .then((res) => {
            setUser({username: userToGive,
              name: nameToGive,
              avatar_url: avatarToGive})
            setMessage("User created successfully");
            
            navigate("/")

          })
          .catch((error) => {
            console.log(error)
            setMessage(error.message);
          });
      
}}>Sign up</button>
<h3>{message}</h3>

</>
)

}

export default Signup