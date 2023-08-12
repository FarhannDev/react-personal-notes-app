import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function HeaderNav() {
  return (
    <Navbar expand={"lg"} color="white" fixed="top">
      <Container>
        <Navbar.Brand className="mx-auto mx-lg-0 mx-xxl-0">
          Note List
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
