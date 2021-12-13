interface IProps {
  src: string;
  alt: string;
}

const mock = ({ src, alt = "" }: IProps): React.ReactElement => {
  return <img src={src} alt={alt} />;
};

export default mock;
