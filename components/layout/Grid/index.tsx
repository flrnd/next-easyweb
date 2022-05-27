import { ReactNode } from "react";

interface IProps {
  columns: number;
  gap?: string;
  children: ReactNode;
  ariaLabel?: string;
}

const Grid = ({
  columns,
  gap = "gap-3",
  children,
  ariaLabel,
}: IProps): JSX.Element => {
  return (
    <div
      className={`inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} ${gap}`}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default Grid;
