import { Row } from "react-bootstrap";
import React from "react";
import NoteItem from "./NoteItem";
import Message from "../../shared/Message";

type Props = {
  notes: Notes[];
  onDelete: (id: string | number) => void;
  onArchived: (id: string | number) => void;
};

const NoteItemList: React.FC<Props> = ({
  notes,
  onDelete,
  onArchived,
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
    <Row className="justify-content-arround g-3 py-3">{renderedContent}</Row>
  );
};

export default NoteItemList;
