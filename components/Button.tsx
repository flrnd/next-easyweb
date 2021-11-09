interface IProps {
  bgColor: string; // tailwindcss background color
  hoverBg?: string; // tailwindcss background color on hover
  textColor: string; // tailwindcss text-color
  hover?: string; // tailwindcss class for generic hover
  path: string; // internal route or http url
  text: string;
}

const Button = ({
  bgColor,
  hoverBg,
  textColor,
  hover,
  path,
  text,
}: IProps): JSX.Element => {
  const hasHover = (hover && `hover:${hover}`) || "";
  const hasHoverBg = (hoverBg && `hover:${hoverBg}`) || "";

  return (
    <div className="rounded-md shadow">
      <a
        href={path}
        className={`btn ${bgColor} ${textColor} ${hasHover} ${hasHoverBg}`}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
