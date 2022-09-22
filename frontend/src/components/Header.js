import { Link } from "react-router-dom";

function Header() {
    return(
        <nav>
        <Link to='/'>
            <h1>Marvel</h1>
        </Link>
        <Link to=''>
            <div>Log In</div>
        </Link>
        
        </nav>
    )
}

export default Header;