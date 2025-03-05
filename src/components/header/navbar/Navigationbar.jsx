
import logo from '../../../asset/Logo.png'
import mapIcon from '../../../asset/map-icon.png'
import searchIcon from '../../../asset/Search-icon.png'
import user from '../../../asset/user-icon.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.scss'
import { Link } from 'react-router';
import cartIcon from '../../../asset/shopping-bag.png'

const Navigationbar = () => {

  return (
   
    <div className='nav-bar'>
      <Navbar expand="xl" className="" >
      <Container>
      <Link to={"/"}> <Navbar.Brand className='logo'> <img  src={logo} alt="" /></Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '200px' }}
           
          >
            <strong><Nav.Link href="#action1" >Deliver to: <img src={mapIcon} alt="" /></Nav.Link></strong>
            
            <Nav.Link href="#action2">Current Location</Nav.Link>
            {/* <strong>
            <Nav.Link href="#action3">Mohammadpur Bus Stand, Dhaka</Nav.Link>
            </strong> */}
            
          </Nav>
          <strong>
            <Nav.Link className='me-4' href="#action3"> <img src={searchIcon} alt="" />Search Food</Nav.Link>
            </strong>
            <div variant="outline-none login-btn bg-body-tertiary" className='me-4 my-4 categories'><Link to={'categories'}>Categories</Link> </div> 
            <Button variant="outline-none login-btn bg-body-tertiary" className='me-3 my-4'> <img src={user} alt="" /> Login</Button>
          
            <Link className='cart' to={"/cart"} variant="outline-none login-btn bg-body-tertiary"> <img src={cartIcon} alt="" /> <li>0</li></Link>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar
