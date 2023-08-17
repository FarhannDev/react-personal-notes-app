type Props = { message: string };

export default function Message({ message }: Props) {
  return (
    <div className="d-flex justify-content-center mx-auto g-2">
      <p className="text-white-50 text-capitalize fst-normal">{message}</p>
    </div>
  );
}
