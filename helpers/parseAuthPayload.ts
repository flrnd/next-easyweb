interface IParsedPayload {
  role: string;
  id: string;
  expireIn: number;
}

const parseAuthPayload = (payload: string): IParsedPayload => {
  const regex = /\(|\)/g;
  const parsed = payload.replace(regex, "").split(",");

  return {
    role: parsed[0],
    id: parsed[1],
    expireIn: parseInt(parsed[2]),
  };
};

export default parseAuthPayload;
