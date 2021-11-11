interface IProps {
  icon: JSX.Element;
  href: string;
}

const Social = ({ icon, href }: IProps): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-xsmall mr-3 text-gray-400"
    >
      {icon}
    </a>
  );
};

export default Social;
