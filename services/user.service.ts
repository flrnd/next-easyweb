export const userService = {
  login,
};

async function login(username: string, password: string): Promise<any> {
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
    return;
  }
  return message;
}

//function logout() {}
//
//function register(username, password) {
//  return "registered!";
//}
