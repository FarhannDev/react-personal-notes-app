import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ButtonBack from "../../components/shared/ButtonBack";
import HeadingTitle from "../../components/shared/HeadingTitle";
import NoteFormEdit from "../../components/features/notes/NoteFormEdit";

type Props = {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
};

export default function NoteEdit({ notes, setNotes }: Props) {
  const { noteId } = useParams();

  const onUpdateNotesHandler = (
    title: string | undefined,
    body: string | undefined
  ) => {
    const updateNotes: Partial<Notes> = {
      title,
      body,
      updatedAt: new Date().toISOString(),
    };

    const items = notes?.map((item) => {
      if (item.id == noteId) {
        return {
          ...item,
          ...updateNotes,
        };
      }

      return item;
    });

    setNotes(items);
  };

  return (
    <Row className="justify-content-center g-2 py-5">
      <Col lg={8} md={10} sm={12}>
        <ButtonBack title="Kembali" link="/note" />
        <div className="pt-2">
          <HeadingTitle title="Perbarui Daftar Catatan" />
        </div>
        <hr className="text-secondary" />

        <NoteFormEdit
          notes={notes}
          noteId={noteId}
          onUpdate={onUpdateNotesHandler}
        />
      </Col>
    </Row>
  );
}
