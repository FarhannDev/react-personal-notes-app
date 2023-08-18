import { useState } from "react";
import { nanoid } from "nanoid";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getInitialData } from "../../utils/data/getInitialData";
import NoteFormInput from "../../components/features/notes/NoteFormInput";
import ButtonBack from "../../components/shared/ButtonBack";

type NoteInputArg = { title: string; body: string };

export default function NoteAdd() {
  const [notes, setNotes] = useState<Notes[]>(getInitialData);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

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
      updatedAt: new Date().toISOString(),
    };

    setNotes([...notes, newNotes]);
    setIsSuccess(true);

    navigate("/note");
  };
  return (
    <Row className="justify-content-center g-2 py-5">
      <Col lg={8} md={10} sm={12}>
        <ButtonBack title="Kembali" link="/note" />
        <NoteFormInput addNotes={onAddNotesHandler} isSuccess={isSuccess} />
      </Col>
    </Row>
  );
}
