import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

type Props = { archived: boolean };

export default function NoteBadgeStatus({ archived }: Props) {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex justify-content-end"
    >
      {!archived ? (
        <Badge pill bg="success" text="dark">
          Aktif
        </Badge>
      ) : (
        <Badge pill bg="warning" text="dark">
          Diarsipkan
        </Badge>
      )}
    </Stack>
  );
}
