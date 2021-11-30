import { VercelRequest, VercelResponse } from "@vercel/node";
import { Pool } from "pg";
import * as jwt from "jsonwebtoken";
import { parseAuthPayload, timestampToSeconds } from "../helpers";

export default async function (
  request: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  const { username, password } = request.body;

  const pgPool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    await pgPool.connect();
    const queryRes = await pgPool.query(
      `SELECT website.authenticate_user('${username}', '${password}')`
    );
    const authenticated = queryRes.rows[0].authenticate_user;
    const parsedPayload = parseAuthPayload(authenticated);

    const token = jwt.sign(
      {
        role: parsedPayload.role,
        userId: parsedPayload.id,
        userName: parsedPayload.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: timestampToSeconds(parsedPayload.expireIn) }
    );

    return res.status(200).json({
      message: JSON.stringify(token),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    pgPool.end();
  }
}
