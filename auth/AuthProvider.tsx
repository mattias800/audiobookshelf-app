import * as React from "react";
import { ReactNode, useMemo, useState } from "react";
import { User } from "@/api/models/User";
import { AuthContext, AuthContextValue } from "@/auth/AuthContext";

export interface AuthProviderProps {
  renderWhenAuth: () => ReactNode;
  renderWhenNotAuth: () => ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  renderWhenAuth,
  renderWhenNotAuth,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  console.log("--authuser");
  console.log(JSON.stringify(user));
  const v = useMemo<AuthContextValue>(
    () => ({
      user,
      setAuthUser: (user: User) => setUser(user),
      clearAuthUser: () => setUser(undefined),
    }),
    [setUser, user],
  );

  console.log("auth value");
  console.log(v);
  return (
    <AuthContext.Provider value={v}>
      {user ? renderWhenAuth() : renderWhenNotAuth()}
    </AuthContext.Provider>
  );
};
