type Props = { title: string };

const NoteHeadingTitle = ({ title }: Props) => (
  <div className="mb-3 pt-3">
    <h3 className="text-white text-start text-capitalize fst-normal fs-4 lh-1">
      {title}
    </h3>
  </div>
);

export default NoteHeadingTitle;
