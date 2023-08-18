type Props = { message: string };

export default function SayHello({ message }: Props) {
  return (
    <div className="row justify-content-start g-2 py-5">
      <div className="col">
        <h1 className="text-start text-white text-capitalize fst-normal fs-3 lh-1">
          {message}
        </h1>
      </div>
    </div>
  );
}
