import { Stack } from "react-bootstrap";
import { useState } from "react";
import { showFormattedDate } from "../../../utils/showFormattedDate";

type NoteFormEditProps = {
  notes: Notes[];
  noteId: string | undefined;
  onUpdate: (title: string | undefined, body: string | undefined) => void;
};

export default function NoteFormEdit({
  notes,
  noteId,
  onUpdate,
}: NoteFormEditProps) {
  const note: Notes | undefined = notes.find((note) => note.id == noteId);
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

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onUpdate(title, body);
  };

  return (
    <div className="position-relative px-0 mx-0">
      <form onSubmit={onSubmitHandler} data-bs-theme="dark">
        <Stack direction="vertical" gap={2}>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control-plaintext  text-start text-white text-start text-wrap fst-normal fs-3 px-0"
              placeholder="Judul Kegiatan"
              aria-label="Judul Kegiatan"
              aria-describedby="addon-wrapping"
              value={title}
              onChange={onTitleChangeHandler}
            />
          </div>
          <div className="d-flex justify-content-start flex-wrap">
            <span className="text-start text-white-50 fst-normal me-2">
              Dibuat {showFormattedDate(note?.createdAt)}
            </span>
            <span
              className="text-start text-white-50 fst-normal"
              hidden={!note?.updatedAt}
            >
              | Diperbarui {showFormattedDate(note?.updatedAt)}
            </span>
          </div>

          <div className="input-group flex-nowrap mb-3">
            <textarea
              className="form-control-plaintext border-0 rounded-0 text-start text-white-50  fst-normal fs-5 px-0 mb-3"
              id="exampleFormControlTextarea1 "
              rows={8}
              value={body}
              onChange={onBodyChangeEventHandler}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger btn-md rounded">
            Perbarui Catatan
          </button>
        </Stack>
      </form>
    </div>
  );
}
