import { IResponse } from "../types/interfaces";

export const userService = {
  login,
};

async function login(username: string, password: string): Promise<IResponse> {
  const res = await fetch("/api/login", {
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const { error, message } = await res.json();
  if (error) {
    console.error("response: ", error);
    return {
      status: res.status,
      message: error,
    };
  }

  return {
    status: res.status,
    token: message,
  };
}

//function logout() {}
//
//function register(username, password) {
//  return "registered!";
//}
