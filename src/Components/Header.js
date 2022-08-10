import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand  className="navbar-brand">Brand Name</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;