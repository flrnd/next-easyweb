import classNames from "classnames";

interface IProps {
  margin?: string;
  size?: string;
  lineHeight?: string;
  weight?: string;
  textAlign?: string;
  fontFamily?: string;
  textColor?: string;
  children: React.ReactNode;
}

const Paragraph = ({
  margin = "mb-4",
  size,
  lineHeight,
  weight,
  textAlign,
  fontFamily,
  textColor,
  children,
}: IProps): JSX.Element => {
  return (
    <p
      className={classNames(
        margin,
        size,
        lineHeight,
        weight,
        textAlign,
        fontFamily,
        textColor
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
