import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BootHeader( props) {

  
  return (

    <div className='navbar'>
      <div className='nav-up'>
        <h1>Indian Institute of Technology Indore</h1>
        {
          (props.userAuth)?
          <p>Hello Name</p>
          :
          <a href="/account">
          <button>Login/Signup</button>
          </a>


        }


      </div>

      <Navbar bg="" expand="lg" className='mt-0 navigationbar'>
        <Container>
          <Navbar.Brand href="/">
            <img alt=''className='logoimg' src='https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/149.jpg?v=1576655536'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <Nav.Link  className='nav-buttons' href='/' onclick="return false;">Home</Nav.Link>
              <NavDropdown className='nav-buttons' title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">IIT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  IIT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">IIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  IIT
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='nav-buttons' title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">IIT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  IIT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">IIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  IIT
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='nav-buttons' title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">IIT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  IIT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">IIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  IIT
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='nav-buttons' href="#home">Contact-Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BootHeader