import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import NotesIndex from "./containers/notes/NoteIndex";

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Layout>
        {/* <SayHello message="Halo, Selamat Datang Di Aplikasi Note List👋" /> */}
        <NotesIndex />
      </Layout>
    </ThemeProvider>
  );
}
