import { createContext } from "react";
import { User } from "@/api/models/User";

export interface AuthContextValue {
  user: User | undefined;
  clearAuthUser: () => void;
  setAuthUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: undefined,
  setAuthUser: () => {},
  clearAuthUser: () => {},
});
