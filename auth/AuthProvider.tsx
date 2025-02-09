import * as React from "react";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { User } from "@/api/models/User";
import { AuthContext, AuthContextValue } from "@/auth/AuthContext";
import { client } from "@/api/client/client.gen";
import { BASE_URL } from "@/api/BaseUrl";

export interface AuthProviderProps {
  renderWhenAuth: () => ReactNode;
  renderWhenNotAuth: () => ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  renderWhenAuth,
  renderWhenNotAuth,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const onLoggedIn = useCallback((loggedInUser: User) => {
    client.setConfig({
      baseUrl: BASE_URL,
      headers: {
        Authorization: `Bearer ${loggedInUser.token}`,
      },
    });
    setUser(loggedInUser);
  }, []);

  const onLoggedOut = useCallback(() => {
    client.setConfig({
      baseUrl: BASE_URL,
      headers: {},
    });
    setUser(undefined);
  }, []);

  const v = useMemo<AuthContextValue>(
    () => ({
      user,
      setAuthUser: onLoggedIn,
      clearAuthUser: onLoggedOut,
    }),
    [setUser, user],
  );

  return (
    <AuthContext.Provider value={v}>
      {user ? renderWhenAuth() : renderWhenNotAuth()}
    </AuthContext.Provider>
  );
};
