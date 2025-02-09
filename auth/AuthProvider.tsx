import * as React from "react";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { User } from "@/api/models/User";
import { AuthContext, AuthContextValue } from "@/auth/AuthContext";
import { client } from "@/api/client/client.gen";
import { BASE_URL } from "@/api/BaseUrl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface AuthProviderProps {
  renderWhenAuth: () => ReactNode;
  renderWhenNotAuth: () => ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

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
      {user ? (
        <QueryClientProvider client={queryClient}>
          {renderWhenAuth()}
        </QueryClientProvider>
      ) : (
        renderWhenNotAuth()
      )}
    </AuthContext.Provider>
  );
};
