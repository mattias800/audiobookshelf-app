import * as React from "react";
import { useLocalSearchParams } from "expo-router";
import { Spinner } from "tamagui";
import { useQuery } from "@tanstack/react-query";
import { getLibraryByIdOptions } from "@/api/client/@tanstack/react-query.gen";
import { Banner } from "@/components/Banner";
import { BookList } from "@/features/book-list/BookList";
import { SafeAreaView } from "react-native";
import { Heading } from "@/components/app-ui/core/components/text/Heading";
import { Box } from "@/components/app-ui/core/components/layout/Box";

export interface LibraryScreenProps {}

export const LibraryScreen: React.FC<LibraryScreenProps> = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    data: library,
    isLoading,
    error,
  } = useQuery({
    ...getLibraryByIdOptions({
      path: {
        id,
      },
    }),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error || library == null) {
    return <Banner text={error?.message ?? "Unknown error"} />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <Box indent={1} spacing={1}>
        <Heading variant={"h1"} color={"white"}>
          {library.name ?? ""}
        </Heading>
      </Box>
      <BookList libraryId={id} />
    </SafeAreaView>
  );
};

export default LibraryScreen;
