let token: string | undefined = undefined;

export const setToken = (newToken: string) => {
  token = newToken;
};

export const getToken = () => {
  return token;
};
