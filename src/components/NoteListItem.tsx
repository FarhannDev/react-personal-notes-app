/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Card } from "react-bootstrap";
import { showFormattedDate } from "../utils/showFormattedDate";
import NoteBadgeStatus from "./NoteBadgeStatus";
import NoteButtonAction from "./NoteButtonAction";

type Props = {
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
  noteId: string | number;
  onDelete: (id: string | number) => void;
  onArchived: (id: string | number) => void;
};

const NoteListItem = ({
  title,
  body,
  createdAt,
  archived,
  noteId,
  onDelete,
  onArchived,
}: Props) => (
  <Col xxl={6} xl={6} lg={6} md={12}>
    <Card body data-bs-theme="dark" className="nl_card_item">
      <NoteBadgeStatus archived={archived} />
      <Card.Title className="text-start text-white mb-2 fs-5 fst-bolder">
        {title}
      </Card.Title>
      <Card.Subtitle className="text-start text-secondary mb-2 fs-6 fst-normal">
        {showFormattedDate(createdAt)}
      </Card.Subtitle>
      <Card.Text className="text-start text-white-50 mb-2 fs-6 fst-normal">
        {body.length > 150 ? `${body.slice(0, 150)}...` : body}
      </Card.Text>

      <NoteButtonAction
        title={title}
        archived={archived}
        noteId={noteId}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </Card>
  </Col>
);

export default NoteListItem;
