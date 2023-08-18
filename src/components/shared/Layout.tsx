import HeaderNav from "./HeaderNav";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <HeaderNav />
      <main className="position-relative px-0 mx-0">
        {/* Rendered Component */}
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
