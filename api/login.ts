import { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "pg";

export default async function (
  request: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  const { username, password } = request.body;
  const client = new Client();

  try {
    client.connect();
    const queryRes = await client.query(
      `SELECT website.authenticate_user(${username}, ${password})`
    );

    return res.status(200).json({
      message: queryRes,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    await client.end();
  }
}
