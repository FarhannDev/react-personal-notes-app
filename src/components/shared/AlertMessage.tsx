import { useState } from "react";
import Alert from "react-bootstrap/Alert";

type AlertMessageArg = { variant: string; message: string };

export default function AlertMessage({
  variant = "success",
  message,
}: AlertMessageArg) {
  const [show, setShow] = useState(true);

  return (
    show && (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <p className="text-white text-start fst-normal fs-6 p-2">{message}</p>
      </Alert>
    )
  );
}
