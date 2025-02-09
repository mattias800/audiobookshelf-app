import * as React from "react";
import { useSelector } from "react-redux";
import { authSlice } from "@/common/redux/auth/AuthSlice";
import { ReactNode } from "react";

export interface AuthSwitcherProps {
  render: (isLoggedIn: boolean) => ReactNode;
}

export const AuthSwitcher: React.FC<AuthSwitcherProps> = ({ render }) => {
  const token = useSelector(authSlice.selectors.token);

  return <>{render(!!token)}</>;
};
