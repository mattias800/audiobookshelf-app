import * as React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Welcome to audiobookshelf!</ThemedText>
      <HelloWave />

      <ThemedText type="title">
        To start using the app you need to login on an audiobookshelf server.
      </ThemedText>

      <Link href={"/server"}>Lets go</Link>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
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

export default Index;
