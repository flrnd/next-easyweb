import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function (
  request: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  const { username, password } = request.body;

  try {
    return res.status(200).json({
      message: `username: ${username} password: ${password}`,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
