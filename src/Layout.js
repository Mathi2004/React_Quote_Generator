import { Outlet, Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Layout = () => {
  return (
//     <>
//      <center><nav style={{border:"5px solid Black",width:"500px",backgroundColor:"black",borderRadius:"20px"}}>
 
//             <div>
//             <Link to="/" style={{color:'#FFFAFA'}}>Home</Link><h1 style={{letterSpacing:"1px"}}> </h1>
//             <Link to="/Motivate" style={{color:'#FFFAFA'}}>Motivate</Link><span >   </span>
//             <Link to="/Life" style={{color:'#FFFAFA'}}>Life</Link><span>   </span>
//             <Link to="/Positive" style={{color:'#FFFAFA'}}>Positive</Link><span>   </span>
//             <Link to="/Inspirational" style={{color:'#FFFAFA'}}>Inspirational</Link><span>   </span>
            
//    <br></br>
// </div>
//       </nav>
//       </center>

//       <Outlet />
    // </>
    <div>
      <Navbar variant="dark" fixed="top" style={{backgroundColor:"rgb(50, 55, 60)"}}>
        <Container>
          <Navbar.Brand href="#home">Quote Generator</Navbar.Brand>
          <Nav>
            <LinkContainer to="/Motivate">
              <Nav.Link>Motivate</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Life">
              <Nav.Link>Life</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Positive">
              <Nav.Link>Positive</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Inspirational">
              <Nav.Link>Inspirational</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
};

export default Layout