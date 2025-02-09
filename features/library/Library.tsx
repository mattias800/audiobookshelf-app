import * as React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useQuery } from "@tanstack/react-query";
import { getLibrariesOptions } from "@/api/client/@tanstack/react-query.gen";

export interface LibraryProps {}

export const Library: React.FC<LibraryProps> = () => {
  const { data, error, isLoading } = useQuery({
    ...getLibrariesOptions(),
  });

  if (isLoading) {
    return (
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.titleContainer}>
        <ThemedText>error: {error.message}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.titleContainer}>
      {data?.libraries?.map((library) => (
        <ThemedText>{library.name}</ThemedText>
      ))}
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
