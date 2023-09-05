import { Link } from 'react-router-dom'
const Header = () =>{
    return(<><Link to="/" className="greatnews"><h1>Great News</h1></Link>
    <Link to="/login">Login/Sign up</Link>
    </>
        
    )
}

export default Header