import classNames from "classnames";

interface IProps {
  margin?: string;
  size?: string;
  weight?: string;
  textAlign?: string;
  fontFamily?: string;
  children: React.ReactNode;
}
const Paragraph = ({
  margin = "m-2",
  size,
  weight,
  textAlign,
  fontFamily,
  children,
}: IProps): JSX.Element => {
  return (
    <p className={classNames(margin, size, weight, textAlign, fontFamily)}>
      {children}
    </p>
  );
};

export default Paragraph;
