import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

type NoteInputArg = { title: string; body: string };
type NoteInputProps = {
  addNotes: ({ title, body }: NoteInputArg) => void;
  isSuccess: boolean;
};

export default function NoteFormInput({ addNotes, isSuccess }: NoteInputProps) {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const limit: number = 50;

  const onTitleChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= limit) {
      setTitle(value);
    }

    // title.length < limit ? setTitle(e.target.value) : 0;
  };

  const onBodyChangeEventHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const onResetValueHandler = () => {
    setTitle('');
    setBody('');
  };

  const onAddNotesHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    title.length <= limit && body.length ? addNotes({ title, body }) : null;

    setTitle('');
    setBody('');
  };

  const disabledButton = Boolean(title) && Boolean(body);

  return (
    <div className="position-relative px-0 mx-0 py-3">
      <Card body data-bs-theme="dark">
        <Card.Title>Form Tambah Catatan Baru</Card.Title>
        <hr className="text-secondary" />

        {isSuccess && (
          <AlertMessage
            variant="dark"
            message="Berhasil menambahkan catatan baru."
          />
        )}

        <Form
          onSubmit={onAddNotesHandler}
          onReset={onResetValueHandler}
          className="py-3"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-start text-white fst-normal">
              Judul Catatan:{' '}
              <span className="text-danger">
                * Sisa Karakter: {title.length ? limit - title.length : limit}
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Judul Catatan"
              value={title}
              onChange={onTitleChangeHandler}
              autoComplete={'title'}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-start text-white fst-normal">
              Catatan:
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              value={body}
              onChange={onBodyChangeEventHandler}
              placeholder="Tuliskan Isi Catatan..."
            />
          </Form.Group>

          <div className="">
            <Stack direction="vertical" gap={2} className="mb-3">
              <Button
                style={{ backgroundColor: '#4c0bce' }}
                disabled={!disabledButton}
                type="submit"
                className="rounded-pill d-block w-100 text-center text-white text-capitalize fst-normal fs-6"
              >
                Buat Catatan Baru
              </Button>{' '}
              <Button
                type="reset"
                variant="dark"
                className="rounded-pill d-block w-100 text-center text-capitalize fst-normal fs-6"
              >
                Batalkan
              </Button>{' '}
            </Stack>
          </div>
        </Form>
      </Card>
    </div>
  );
}
