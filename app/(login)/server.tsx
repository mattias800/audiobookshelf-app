import * as React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Button, StyleSheet, TextInput } from "react-native";

export interface ServerProps {}

export const Server: React.FC<ServerProps> = () => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Please enter server</ThemedText>
      <TextInput placeholder={"https://my.server.com"} />

      <Button title={"Lets go"} />
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

export default Server;
