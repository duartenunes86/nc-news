import { Link } from 'react-router-dom'
import { UserContext } from './contexts/Users'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';


const Header = () =>{
    const [topics,setTopics]=useState([])
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        
          axios.get(`https://great-news.onrender.com/api/topics`)
          .then(
            (response) =>{console.log(response)
              return response.data}).then((datajson)=>{
              console.log("Fetched topics:", datajson.topics);
              setTopics(datajson.topics)
            }
            )
            
        
      }, []);
  
    console.log(topics, "topics")
    return(<><Link to="/" className="greatnews"><h1>Great News</h1></Link>
    {(window.location.pathname==="/login"||window.location.pathname==="/signup")?"":Object.keys(user).length === 0?<Link to="/login">Login/Sign up</Link>:<Link to="/" onClick={()=>{setUser({})}}>Logout</Link>}
    
    <h3>Hello {user.username}</h3>
    <div>{topics.map((element)=>{
      console.log("Mapping element:", element);
      return (<><Link to={`/topics/${element.slug}`}>{element.slug}</Link>  </>)


        
    })}</div>
    
    </>
        
    )
}

export default Header