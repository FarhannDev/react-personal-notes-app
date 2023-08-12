import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import SayHello from "./components/SayHello";
import NoteApp from "./components/NoteApp";

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Layout>
        <SayHello message="Halo, Selamat Datang Di Aplikasi Note List👋" />
        <NoteApp />
      </Layout>
    </ThemeProvider>
  );
}
