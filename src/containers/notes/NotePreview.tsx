import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Stack } from "react-bootstrap";
import ButtonBack from "../../components/shared/ButtonBack";
import { useState } from "react";

type NotePreviewProps = {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
};

export default function NotePreview({ notes, setNotes }: NotePreviewProps) {
  const { noteId } = useParams();
  const note: Notes | undefined = notes.find(
    (note) => note.id == Number(noteId)
  );

  const navigate = useNavigate();
  const [title, setTitle] = useState<string | undefined>(note?.title);
  const [body, setBody] = useState<string | undefined>(note?.body);

  const onTitleChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onBodyChangeEventHandler: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onDeleteNotesHandler: (noteId: number | string) => void = (
    noteId: number | string
  ) => {
    const note = notes?.filter((note) => note.id !== Number(noteId));
    setNotes(note);

    navigate("/note");
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateNotes: Partial<Notes> = { title, body };
    const items = notes?.map((item) => {
      if (item.id === Number(noteId)) {
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

        <hr className="text-secondary" />

        <div className="position-relative px-0 mx-0">
          <form onSubmit={onSubmitHandler}>
            <div className="input-group flex-nowrap" data-bs-theme="dark">
              <input
                type="text"
                className="form-control border-0 rounded-0 text-start text-white  fst-normal fs-3 px-0 mb-3"
                placeholder="Judul Kegiatan"
                aria-label="Judul Kegiatan"
                aria-describedby="addon-wrapping"
                value={title}
                onChange={onTitleChangeHandler}
              />
            </div>
            <div className="input-group flex-nowrap" data-bs-theme="dark">
              <textarea
                className="form-control border-0 rounded-0 text-start text-white-50  fst-normal fs-5 px-0 mb-3"
                id="exampleFormControlTextarea1 "
                rows={8}
                value={body}
                onChange={onBodyChangeEventHandler}
              ></textarea>
            </div>

            <div className="d-flex justify-content-end py-3">
              <Stack direction="horizontal" gap={2}>
                <button
                  onClick={() => onDeleteNotesHandler(Number(note?.id))}
                  type="button"
                  className="btn btn-danger btn-md rounded"
                >
                  Hapus
                </button>
                <button
                  type="submit"
                  className="btn btn-danger btn-md rounded "
                >
                  Perbarui
                </button>
              </Stack>
            </div>
          </form>
        </div>
      </Col>
    </Row>
  );
}
