interface IProps {
  color?: string;
}

const ProfileIcon = ({ color }: IProps): JSX.Element => (
  <svg
    viewBox="0 0 514 537"
    fill="none"
    className={`${color}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M400.41 145.09C400.41 231.621 336.129 313.39 256.82 313.39C177.511 313.39 113.21 231.624 113.21 145.09C113.21 58.543 177.503 0 256.82 0C336.129 0 400.41 58.535 400.41 145.09V145.09Z"
      fill="currentColor"
    />
    <path
      d="M389.76 308.16C356.096 347.691 310.108 373.422 259.37 373.422C207.757 373.422 161.03 346.793 127.21 306.086C51.116 352.445 0 438.356 0 536.726H513.6C513.596 439.824 464.002 354.976 389.76 308.156V308.16Z"
      fill="currentColor"
    />
  </svg>
);

export default ProfileIcon;
