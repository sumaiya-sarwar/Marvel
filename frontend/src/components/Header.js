import '../App.css';
import { Link } from "react-router-dom";


function Header() {
    return(
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='title'><img src="./marvel.PNG" alt="logo" width="200px" /></h1>
        </Link>    
    )
}

export default Header;