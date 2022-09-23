
import {Navbar, Container} from 'react-bootstrap';
import SearchForm from './SearchForm';

const NavComponent = () => {


    return (
        <Navbar>
        <Container>
          <Navbar.Brand href='/'>Character List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href='/'>Sign Up / Login</a>
            </Navbar.Text>
                <SearchForm/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavComponent;