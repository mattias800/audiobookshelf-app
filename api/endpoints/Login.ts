import { InvalidRequest } from "@/api/InvalidRequest";
import { BASE_URL } from "@/api/BaseUrl";
import { User } from "@/api/models/User";

export type LoginResponse = LoginSuccess | LoginUnauthorized | InvalidRequest;

export interface LoginSuccess {
  type: "success";
  user: User;
}

export interface LoginUnauthorized {
  type: "unauthorized";
}

export const login = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  const r = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  switch (r.status) {
    case 200:
      const data = await r.json();
      const user = data.user as User;
      return { type: "success", user };
    case 401:
      return { type: "unauthorized" };
    default:
      return { type: "invalid" };
  }
};
