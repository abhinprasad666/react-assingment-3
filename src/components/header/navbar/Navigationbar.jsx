
import logo from '../../../asset/Logo.png'
import mapIcon from '../../../asset/map-icon.png'
import searchIcon from '../../../asset/Search-icon.png'
import user from '../../../asset/user-icon.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.scss'

const Navigationbar = () => {

  return (
   
    <div>
      <Navbar expand="xl" className="" >
      <Container>
        <Navbar.Brand className='logo'> <img  src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '200px' }}
           
          >
            <strong><Nav.Link href="#action1" >Deliver to: <img src={mapIcon} alt="" /></Nav.Link></strong>
            
            <Nav.Link href="#action2">Current Location</Nav.Link>
            <strong>
            <Nav.Link href="#action3">Mohammadpur Bus Stand, Dhaka</Nav.Link>
            </strong>
            
          </Nav>
          <strong>
            <Nav.Link className='me-4' href="#action3"> <img src={searchIcon} alt="" />Search Food</Nav.Link>
            </strong>
         
            <Button variant="outline-none login-btn bg-body-tertiary"> <img src={user} alt="" /> Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar
