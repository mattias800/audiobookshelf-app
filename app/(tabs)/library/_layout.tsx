import * as React from "react";
import { Stack } from "expo-router";

export interface LibraryLayoutProps {}

export const LibraryLayout: React.FC<LibraryLayoutProps> = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: { backgroundColor: "transparent" },
        headerShadowVisible: false, // no bottom border
        headerBackTitle: "", // hides "< Back" text next to arrow
        title: "", // no title text
      }}
    >
      <Stack.Screen name={"index"} />
      <Stack.Screen name={"[id]"} />
    </Stack>
  );
};

export default LibraryLayout;
