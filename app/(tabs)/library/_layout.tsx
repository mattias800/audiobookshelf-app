import * as React from "react";
import { Stack } from "expo-router";

export interface LibraryLayoutProps {}

export const LibraryLayout: React.FC<LibraryLayoutProps> = () => {
  return (
    <Stack>
      <Stack.Screen name={"index"} />
      <Stack.Screen name={"[id]"} />
    </Stack>
  );
};

export default LibraryLayout;
