import { useState } from "react";
import { nanoid } from "nanoid";
import { Row, Col } from "react-bootstrap";
import { getInitialData } from "../../utils/data/getInitialData";
import NoteTabButton from "../../components/features/notes/NoteTabButton";
import NoteFormInput from "../../components/features/notes/NoteFormInput";
import NoteItemList from "../../components/features/notes/NoteItemList";
import NoteItemSearch from "../../components/features/notes/NoteItemSearch";
import NoteHeadingTitle from "../../components/features/notes/NoteHeadingTitle";

type NoteInputArg = { title: string; body: string };

export default function NoteIndex() {
  const [notes, setNotes] = useState<Notes[]>(getInitialData);
  const [isArchiveNotes, setIsArchiveNotes] = useState<boolean>(false);
  const [isActiveNotes, setIsActiveNotes] = useState<boolean>(false);
  const [isNotes, setIsNotes] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  // Set Handler
  const onDeleteNotesHandler: (id: string | number) => void = (
    id: string | number
  ): void => {
    const myItems: Notes[] = notes?.filter((note) => note.id !== id);
    setNotes(myItems);
  };

  const onArchivedNotesHandler: (id: string | number) => void = (
    id: string | number
  ): void => {
    const updatedArchived: Partial<Notes> = { archived: true };
    const updatedUnArchived: Partial<Notes> = { archived: false };
    const items: Notes[] = notes.map((item) => {
      if (item.id === id) {
        if (!item.archived) {
          return {
            ...item,
            ...updatedArchived,
          };
        }

        return {
          ...item,
          ...updatedUnArchived,
        };
      }
      return item;
    });

    setNotes(items);
  };

  const onAddNotesHandler: ({ title, body }: NoteInputArg) => void = ({
    title,
    body,
  }: NoteInputArg) => {
    const newNotes: Notes = {
      id: nanoid(16),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNotes]);
    setIsSuccess(true);
  };

  const isNoteArchived: Notes[] = notes?.filter((note) => note.archived);
  const isNoteUnArchived: Notes[] = notes?.filter((note) => !note.archived);

  const renderedContent: JSX.Element | null = isNotes ? (
    <>
      <NoteHeadingTitle title="Semua Daftar Catatan" />
      {notes.length ? (
        <NoteItemSearch search={search} setSearch={setSearch} />
      ) : null}
      <NoteItemList
        notes={notes
          .slice()
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.body.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))}
        onDelete={onDeleteNotesHandler}
        onArchived={onArchivedNotesHandler}
      />
    </>
  ) : isActiveNotes ? (
    <>
      <NoteHeadingTitle title={`${isNoteUnArchived.length} Catatan Aktif`} />
      {isNoteUnArchived.length ? (
        <NoteItemSearch search={search} setSearch={setSearch} />
      ) : null}
      <NoteItemList
        notes={notes
          .slice()
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.body.toLowerCase().includes(search.toLowerCase())
          )
          .filter((note) => !note.archived)
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))}
        onDelete={onDeleteNotesHandler}
        onArchived={onArchivedNotesHandler}
      />
    </>
  ) : isArchiveNotes ? (
    <>
      <NoteHeadingTitle title={`${isNoteArchived.length} Catatan Diarsipkan`} />
      {isNoteArchived.length ? (
        <NoteItemSearch search={search} setSearch={setSearch} />
      ) : null}

      <NoteItemList
        notes={notes
          .slice()
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.body.toLowerCase().includes(search.toLowerCase())
          )
          .filter((note) => note.archived)
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))}
        onDelete={onDeleteNotesHandler}
        onArchived={onArchivedNotesHandler}
      />
    </>
  ) : null;

  return (
    <>
      <Row className="justify-content-center g-2 py-3">
        <Col lg={8} md={10} sm={12}>
          <NoteFormInput addNotes={onAddNotesHandler} isSuccess={isSuccess} />
          <NoteTabButton
            isNotes={isNotes}
            isArchiveNotes={isArchiveNotes}
            isActiveNotes={isActiveNotes}
            setIsNotes={setIsNotes}
            setIsActiveNotes={setIsActiveNotes}
            setIsArchiveNotes={setIsArchiveNotes}
          />

          {renderedContent}
        </Col>
      </Row>
    </>
  );
}
