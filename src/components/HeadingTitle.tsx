type Props = { title: string };

const HeadingTitle = ({ title }: Props) => (
  <h3 className="text-white text-start text-capitalize fst-normal fs-4 lh-1">
    {title}
  </h3>
);

export default HeadingTitle;
