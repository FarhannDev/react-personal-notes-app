import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Layout from './components/Layout';
import NoteApp from './components/NoteApp';

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Layout>
        <NoteApp />
      </Layout>
    </ThemeProvider>
  );
}
