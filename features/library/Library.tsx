import * as React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import {getLibraries} from "../../api/client/sdk.gen";
import {useQuery} from "@tanstack/react-query";

export interface LibraryProps {}

export const Library: React.FC<LibraryProps> = () => {
  const { data, error } = useQuery({
    ...getLibraries(),
  });
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText>Lets go library!</ThemedText>
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
