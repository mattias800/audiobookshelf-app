import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getLibraryItemsOptions } from "@/api/client/@tanstack/react-query.gen";
import { Spinner } from "tamagui";
import { Banner } from "@/components/Banner";
import { BookListItem } from "@/features/book-list/BookListItem";
import { LibraryItemMinified } from "@/api/client";
import { useAppSelector } from "@/common/redux/ReduxHooks";
import { authSlice } from "@/common/redux/auth/AuthSlice";
import { BASE_URL } from "@/api/BaseUrl";
import { FlatList } from "react-native";

export interface BookListProps {
  libraryId: string;
  onPressBook?: (bookId: string) => void;
}

export const BookList: React.FC<BookListProps> = ({
  onPressBook,
  libraryId,
}) => {
  const { data, error, isLoading } = useQuery({
    ...getLibraryItemsOptions({
      path: { id: libraryId },
      query: { minified: 0 },
    }),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Banner text={error.message} />;
  }

  const list = (data?.results ?? []) as Array<LibraryItemMinified>;

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id ?? ""}
      renderItem={({ item }) => (
        <BookListItem
          name={item.media?.metadata?.title ?? ""}
          author={item.media?.metadata?.authorName ?? ""}
          image={{
            uri: `${BASE_URL}/audiobookshelf/api/items/${item.id}/cover`,
          }}
          key={item.id}
          onPress={() => {
            if (item.id) {
              onPressBook?.(item.id);
            }
          }}
        />
      )}
    />
  );
};
