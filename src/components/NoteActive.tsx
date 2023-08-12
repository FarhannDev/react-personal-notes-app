import { Row } from "react-bootstrap";
import NoteListItem from "./NoteListItem";
import NoteHeadingTitle from "./NoteHeadingTitle";
import NoteListIsEmpty from "./NoteListIsEmpty";
import NoteSearch from "./NoteSearch";

import React, { useState } from "react";

type Props = {
  notes: Notes[];
  onDelete: (id: string | number) => void;
  onArchived: (id: string | number) => void;
};

const NoteActive: React.FC<Props> = ({
  notes,
  onDelete,
  onArchived,
}: Props) => {
  const [search, setSearch] = useState<string>("");

  const renderedContent: JSX.Element | JSX.Element[] = search.length ? (
    notes
      .filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.body.toLowerCase().includes(search.toLowerCase())
      )
      .map((note) => (
        <NoteListItem
          key={note.id}
          noteId={note.id}
          onDelete={onDelete}
          onArchived={onArchived}
          {...note}
        />
      ))
  ) : !notes.length ? (
    <NoteListIsEmpty message="Belum Ada Daftar Catatan." />
  ) : (
    notes.map((note) => (
      <NoteListItem
        key={note.id}
        noteId={note.id}
        onDelete={onDelete}
        onArchived={onArchived}
        {...note}
      />
    ))
  );

  return (
    <>
      <NoteHeadingTitle title={`${notes.length} Catatan Aktif`} />
      {notes.length > 1 && <NoteSearch search={search} setSearch={setSearch} />}
      <Row className="justify-content-arround g-3 py-3">{renderedContent}</Row>
    </>
  );
};

export default NoteActive;
