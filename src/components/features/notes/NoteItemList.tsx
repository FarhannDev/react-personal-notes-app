/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Row } from "react-bootstrap";
import NoteItem from "./NoteItem";
import Message from "../../shared/Message";
import NoteItemSearch from "./NoteItemSearch";
import NoteHeadingTitle from "./NoteHeadingTitle";

type Props = {
  notes: Notes[];
  onDelete: (id: string | number) => void;
  onArchived: (id: string | number) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  initialTitle?: string;
};

const NoteItemList: React.FC<Props> = ({
  notes,
  onDelete,
  onArchived,
  search,
  setSearch,
  initialTitle,
}: Props) => {
  const renderedContent: JSX.Element | JSX.Element[] = !notes.length ? (
    <Message message="Belum Ada Daftar Catatan." />
  ) : (
    notes.map((note) => (
      <NoteItem
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
      <NoteHeadingTitle
        title={`${
          !initialTitle
            ? "Semua Daftar Catatan"
            : `${notes.length} ${initialTitle}`
        }`}
      />
      <NoteItemSearch search={search} setSearch={setSearch} />
      <Row className="justify-content-arround g-3 py-3">{renderedContent}</Row>
    </>
  );
};

export default NoteItemList;
