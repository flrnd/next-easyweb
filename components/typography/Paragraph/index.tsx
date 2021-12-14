import classNames from "classnames";

interface IProps {
  margin?: string;
  size?: string;
  weight?: string;
  textAlign?: string;
  fontFamily?: string;
  children: React.ReactNode;
}
/**
 * TODO: Add tests
 */
const Paragraph = ({
  margin = "mb-4",
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
