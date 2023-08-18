import { useState } from "react";
import { getInitialData } from "./utils/data/getInitialData";
import { Routes, Route, Navigate } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/shared/Layout";
import NotesIndex from "./containers/notes/NoteIndex";
import NoteEdit from "./containers/notes/NoteEdit";

export default function App() {
  // Set Parent Initial Data
  const [notes, setNotes] = useState<Notes[]>(getInitialData);

  console.log({ notes });
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/note" replace={true} />} />
          <Route path="note">
            <Route
              index
              element={<NotesIndex notes={notes} setNotes={setNotes} />}
            />
            <Route
              path=":noteId/edit"
              element={<NoteEdit notes={notes} setNotes={setNotes} />}
            />
          </Route>
          <Route path="*" element={<div>Page Not Found.</div>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
