const timestampToSeconds = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const totalSeconds = `${
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
  }s`;

  return totalSeconds;
};

export default timestampToSeconds;
