import { Col, Card } from 'react-bootstrap';
import { showFormattedDate } from '../../../utils/showFormattedDate';
import NoteItemBadgeStatus from './NoteItemBadgeStatus';
import NoteItemButtonAction from './NoteItemButtonAction';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string | null;
  archived: boolean;
  noteId: string | number;
  onDelete: (id: string | number) => void;
  onArchived: (id: string | number) => void;
};

const NoteItem = ({
  title,
  body,
  archived,
  createdAt,
  noteId,
  onDelete,
  onArchived,
}: Props) => (
  <Col xxl={6} xl={6} lg={6} md={12}>
    <Card body data-bs-theme="dark" className="nl_card_item">
      <NoteItemBadgeStatus archived={archived} />
      {/* <Card.Title className="text-start text-white mb-2 fs-5 fst-bolder">
        {title}
      </Card.Title> */}
      <Link
        to={`${noteId}/edit`}
        className="text-start text-white mb-3 fs-4 fst-bolder link-offset-2 link-underline link-underline-opacity-0 "
      >
        {title.length > 50 ? `${title.substring(0, 50)}...` : title}
      </Link>
      <Card.Subtitle className="text-start text-secondary py-2 fs-6 fst-normal">
        {showFormattedDate(createdAt)}
      </Card.Subtitle>
      <Card.Text className="text-start text-white-50 mb-2 fs-6 fst-normal">
        {body.length > 120 ? `${body.substring(0, 120)}...` : body}
      </Card.Text>

      <NoteItemButtonAction
        title={title}
        archived={archived}
        noteId={noteId}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </Card>
  </Col>
);

export default NoteItem;
