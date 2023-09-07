import { Link } from 'react-router-dom'
import { UserContext } from './contexts/Users'
import { useContext } from 'react';

const Header = () =>{
    const { user, setUser } = useContext(UserContext);
    return(<><Link to="/" className="greatnews"><h1>Great News</h1></Link>
    {(window.location.pathname==="/login"||window.location.pathname==="/signup")?"":Object.keys(user).length === 0?<Link to="/login">Login/Sign up</Link>:<Link to="/" onClick={()=>{setUser({})}}>Logout</Link>}
    {/* <Link to="/login">Login/Sign up</Link> */}
    <h3>Hello {user.username}</h3>
    </>
        
    )
}

export default Header