import classNames from "classnames";

interface IProps {
  background: string; // tailwindcss background color
  hoverBg?: string; // tailwindcss background color on hover
  textColor: string; // tailwindcss text-color
  hover?: string; // tailwindcss class for generic hover
  href: string; // internal route or http url
  label: string;
}

const Button = ({
  background,
  hoverBg,
  textColor,
  hover,
  href,
  label,
}: IProps): JSX.Element => {
  return (
    <div className="rounded-md shadow mx-2">
      <a
        href={href}
        className={classNames(
          "btn",
          background,
          textColor,
          hover && `hover:${hover}`,
          hoverBg && `hover:${hoverBg}`
        )}
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
