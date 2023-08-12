/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Button } from "react-bootstrap";

type Props = {
  isArchiveNotes: boolean;
  isActiveNotes: boolean;
  isNotes: boolean;
  setIsArchiveNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActiveNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNotes: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoteTabButton = ({
  isNotes,
  isArchiveNotes,
  isActiveNotes,
  setIsNotes,
  setIsArchiveNotes,
  setIsActiveNotes,
}: Props) => (
  <Stack direction="horizontal" gap={2} className="mb-3 pt-5">
    <Button
      onClick={() => {
        setIsNotes(true);
        setIsActiveNotes(false);
        setIsArchiveNotes(false);
      }}
      type="button"
      variant="outline-primary"
      className="rounded-pill text-white text-center"
      active={isNotes}
    >
      Semua
    </Button>{" "}
    <Button
      onClick={() => {
        setIsActiveNotes(true);
        setIsNotes(false);
        setIsArchiveNotes(false);
      }}
      type="button"
      variant="outline-primary"
      className="rounded-pill text-white text-center"
      active={isActiveNotes}
    >
      Catatan Aktif
    </Button>{" "}
    <Button
      onClick={() => {
        setIsArchiveNotes(true);
        setIsNotes(false);
        setIsActiveNotes(false);
      }}
      type="button"
      variant="outline-primary"
      className="rounded-pill text-white text-center"
      active={isArchiveNotes}
    >
      Diarsipkan
    </Button>{" "}
  </Stack>
);

export default NoteTabButton;
