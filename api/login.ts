import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "cross-fetch";

const getJwtToken = async (email: string, password: string) => {
  const response = await fetch("http://0.0.0.0:5433/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `mutation {\n  authenticateUser(input: {email: "${email}", password: "${password}"}) {\n    jwtToken\n  }\n}`,
      variables: {},
    }),
  });

  const data = await response.json();
  return data.data.authenticateUser.jwtToken;
};

export default async function (
  request: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  const { username, password } = request.body;

  try {
    const token = await getJwtToken(username, password);
    if (token) {
      return res.status(200).json({
        status: 200,
        message: "Success",
        token,
      });
    } else
      return res.status(400).json({
        message: JSON.stringify({
          status: 400,
          message: "Invalid username or password.",
          token: null,
        }),
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
