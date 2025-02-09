import * as React from "react";
import { useEffect } from "react";
import { client } from "@/api/client/client.gen";
import { BASE_URL } from "@/api/BaseUrl";
import { useSelector } from "react-redux";
import { authSlice } from "@/common/redux/auth/AuthSlice";

export interface AuthProviderProps {}

export const ClientTokenListener: React.FC<AuthProviderProps> = ({}) => {
  const token = useSelector(authSlice.selectors.token);

  useEffect(() => {
    if (token) {
      client.setConfig({
        baseUrl: BASE_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      client.setConfig({
        baseUrl: BASE_URL,
        headers: {},
      });
    }
  }, [token]);

  return null;
};
