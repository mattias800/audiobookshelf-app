import * as React from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Spinner } from "tamagui";
import { PageHeading } from "@/components/PageHeading";
import { useQuery } from "@tanstack/react-query";
import { getLibraryByIdOptions } from "@/api/client/@tanstack/react-query.gen";
import { Banner } from "@/components/Banner";
import {BookList} from "@/features/book-list/BookList";

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
    <ScrollView paddingTop={"$4"}>
      <PageHeading text={library.name ?? ""} />
      <BookList libraryId={id} />
    </ScrollView>
  );
};

export default LibraryScreen;
