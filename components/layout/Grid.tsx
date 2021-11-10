import { ReactNode } from "react";

interface IProps {
  columns: number;
  gap?: string;
  children: ReactNode;
}
const Grid = ({ columns, gap = "gap-2", children }: IProps): JSX.Element => {
  return (
    <div className={`lg:grid lg:grid-cols-${columns} lg:${gap}`}>
      {children}
    </div>
  );
};

export default Grid;
