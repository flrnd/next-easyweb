import { VercelRequest, VercelResponse } from "@vercel/node";
import { Pool } from "pg";

export default async function (
  request: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  const { username, password } = request.body;
  const connectionString = process.env.DATABASE_URL;

  try {
    const pgPool = new Pool({ connectionString });
    const queryRes = pgPool.query(
      `SELECT website.authenticate_user(${username}, ${password})`
    );
    return res.status(200).json({
      message: { queryRes },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
