import { BASE_URL } from "@/api/BaseUrl";
import { getToken } from "@/auth/Auth";

export const authorizedFetch = async <TBody extends {}>(
  path: string,
  body: TBody,
): ReturnType<typeof fetch> => {
  return fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  });
};
