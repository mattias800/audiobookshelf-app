import * as React from "react";
import { Stack } from "expo-router";

export interface _layoutProps {}

export const LoginLayout: React.FC<_layoutProps> = () => {
  console.log("LoginLayout");
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="server" />
      <Stack.Screen name="user" />
    </Stack>
  );
};

export default LoginLayout;
