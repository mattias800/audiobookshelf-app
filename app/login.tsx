import * as React from "react";
import { LoginForm } from "@/features/login/LoginForm";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return <LoginForm />;
};

export default Login;
