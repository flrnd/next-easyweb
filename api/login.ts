import { VercelRequest, VercelResponse } from "@vercel/node";
import { Pool } from "pg";

export default async function (
  request: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  const { username, password } = request.body;
  const { DATABASE_URL } = process.env;

  const pgPool = new Pool({ connectionString: DATABASE_URL });

  try {
    await pgPool.connect();
    const queryRes = await pgPool.query(
      `SELECT website.authenticate_user('${username}', '${password}')`
    );
    return res.status(200).json({
      message: JSON.stringify(queryRes),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    pgPool.end();
  }
}
