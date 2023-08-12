import * as React from "react";
import HeaderNav from "./HeaderNav";
import { Container } from "react-bootstrap";

type LayoutTypeProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutTypeProps) {
  return (
    <>
      <HeaderNav />
      <main className="position-relative px-0 mx-0">
        {/* Rendered Component */}
        <Container>{children}</Container>
      </main>
    </>
  );
}
