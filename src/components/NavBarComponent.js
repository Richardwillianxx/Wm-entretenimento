import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../csss/NavBar.css';



function NavBarComponent() {
  return (
    
     <Navbar bg="dark" data-bs-theme="dark" className='navGeral'>
    <Container >

      <Navbar.Brand href="/home" className='navbarzinhaLogo'>WM entretenimento</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="me-auto " >
          <Nav.Link href="/home" className='navbarzinha'>Home</Nav.Link>
          <Nav.Link href="/filmes" className='navbarzinha'>Filmes</Nav.Link>
          <Nav.Link href="/livros" className='navbarzinha'>Livros</Nav.Link>
          <Nav.Link href="/favoritos" className='navbarzinha'>Favoritos</Nav.Link>
          <Nav.Link href="/login" className='navbarzinha'>Login</Nav.Link>
          <Nav.Link href="/cadastrar" className='navbarzinha'>cadastrar</Nav.Link>
          <Nav.Link href="/teste" className='navbarzinha'>Teste</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}export default NavBarComponent;