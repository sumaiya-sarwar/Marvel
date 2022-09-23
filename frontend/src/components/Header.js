import '../App.css';
import { Link } from "react-router-dom";

function Header() {
    return(
        <nav>
        <Link to='/'>
            <h1 className='title'>Marvel</h1>
        </Link>
      
        </nav>
    )
}

export default Header;