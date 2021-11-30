interface IParsedPayload {
  role: string;
  id: string;
  email: string;
  expireIn: number;
}

const parseAuthPayload = (payload: string): IParsedPayload => {
  const regex = /\(|\)/g;
  const parsed = payload.replace(regex, "").split(",");

  return {
    role: parsed[0],
    id: parsed[1],
    email: parsed[2],
    expireIn: parseInt(parsed[3]),
  };
};

export default parseAuthPayload;
