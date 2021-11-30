import { VercelRequest, VercelResponse } from "@vercel/node";
import { Pool } from "pg";
import * as jwt from "jsonwebtoken";
import { parseAuthPayload, timestampToSeconds } from "../helpers";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import fetch from "cross-fetch";

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
    const httpLink = createHttpLink({
      uri: "http://0.0.0.0:5433/graphql",
      fetch: fetch,
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    const query = gql`
      {
        allUsers {
          nodes {
            id
            firstName
            lastName
          }
        }
      }
    `;
    client.query({ query: query }).then((result) => {
      return result;
    });

    return res.status(200).json({
      message: JSON.stringify(token),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    pgPool.end();
  }
}
