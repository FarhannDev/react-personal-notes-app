/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons/faRedoAlt";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";

type Props = {
  title: string;
  archived: boolean;
  noteId: string | number;
  onDelete: (id: string | number) => void;
  onArchived: (id: string | number) => void;
};

export default function NoteItemButtonAction({
  title,
  archived,
  noteId,
  onDelete,
  onArchived,
}: Props) {
  return (
    <div className="px-0 mx-0 position-absolute nl_card_item_button ">
      <button
        onClick={() => onDelete(noteId)}
        type="button"
        className="btn btn-danger btn-md border-0 rounded"
        title={`Hapus Catatan ${title}`}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button
        onClick={() => onArchived(noteId)}
        type="button"
        className="btn btn-warning btn-md rounded ms-2 me-2"
        title={`${
          !archived ? `Arsipkan Catatan ${title}` : `Aktifkan Catatan ${title}`
        }`}
      >
        {archived ? (
          <FontAwesomeIcon icon={faRedoAlt} />
        ) : (
          <FontAwesomeIcon icon={faBookmark} />
        )}
      </button>
    </div>
  );
}
