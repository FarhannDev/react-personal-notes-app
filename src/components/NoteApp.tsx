/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Row, Col } from 'react-bootstrap';
import { getInitialData } from '../utils/getInitialData';
import NoteTabButton from './NoteTabButton';
import NoteList from './NoteList';
import NoteFormInput from './NoteFormInput';
import NoteArchived from './NoteArchive';
import NoteActive from './NoteActive';

type NoteInputArg = { title: string; body: string };

export default function NoteApp() {
  const [notes, setNotes] = useState<Notes[]>(getInitialData);
  const [isArchiveNotes, setIsArchiveNotes] = useState<boolean>(false);
  const [isActiveNotes, setIsActiveNotes] = useState<boolean>(false);
  const [isNotes, setIsNotes] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

  const renderedContent: JSX.Element | null = isNotes ? (
    <NoteList
      notes={notes}
      onDelete={onDeleteNotesHandler}
      onArchived={onArchivedNotesHandler}
    />
  ) : isActiveNotes ? (
    <NoteActive
      notes={notes.filter((note) => !note.archived)}
      onDelete={onDeleteNotesHandler}
      onArchived={onArchivedNotesHandler}
    />
  ) : isArchiveNotes ? (
    <NoteArchived
      notes={notes.filter((note) => note.archived)}
      onDelete={onDeleteNotesHandler}
      onArchived={onArchivedNotesHandler}
    />
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
