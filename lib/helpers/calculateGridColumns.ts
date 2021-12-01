const calculateGridColumns = (length: number): number => {
  if (!length) return 0;

  switch (length % 2 === 0) {
    case true:
      return 2;
    case false:
      return 3;
  }
};

export default calculateGridColumns;
