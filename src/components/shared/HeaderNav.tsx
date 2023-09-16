import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function HeaderNav() {
  return (
    <Navbar expand={'lg'} color="white" fixed="top">
      <Container>
        <Navbar.Brand className="mx-auto mx-lg-0 mx-xxl-0">
          <img
            alt=""
            src="/vite.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Personal Notes
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
