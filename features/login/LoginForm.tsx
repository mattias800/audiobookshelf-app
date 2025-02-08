import * as React from "react";
import { useCallback } from "react";
import { login } from "@/api/endpoints/Login";
import { useAuth } from "@/auth/UseAuth";
import { ThemedText } from "@/components/ThemedText";
import { Button, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export interface LoginProps {}

export const LoginForm: React.FC<LoginProps> = () => {
  const { setAuthUser } = useAuth();

  const onClickLogin = useCallback(async () => {
    console.log("Logging in");
    const r = await login("test", "test");
    switch (r.type) {
      case "success":
        console.log("success");
        setAuthUser(r.user);
        break;
      case "unauthorized":
        console.log("unauthorized");
        break;
      case "invalid":
        console.log("invalid");
        break;
      default:
        console.log("daaaa");
    }
  }, []);

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText>Please login!</ThemedText>
      <Button title={"Login"} onPress={onClickLogin} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
