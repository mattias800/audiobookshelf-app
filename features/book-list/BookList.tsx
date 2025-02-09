import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getLibraryItemsOptions } from "@/api/client/@tanstack/react-query.gen";
import { Spinner, YStack } from "tamagui";
import { Banner } from "@/components/Banner";
import { BookListItem } from "@/features/book-list/BookListItem";
import { LibraryItemMinified } from "@/api/client";
import { useAppSelector } from "@/common/redux/ReduxHooks";
import { authSlice } from "@/common/redux/auth/AuthSlice";
import { BASE_URL } from "@/api/BaseUrl";

export interface BookListProps {
  libraryId: string;
  onPressBook?: (bookId: string) => void;
}

export const BookList: React.FC<BookListProps> = ({
  onPressBook,
  libraryId,
}) => {
  const token = useAppSelector(authSlice.selectors.token);

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

  return (
    <YStack gap={"$2"} paddingHorizontal={"$4"}>
      {data?.results?.map((libraryItem: LibraryItemMinified, i) => {
        if (i === 10) {
          console.log(JSON.stringify(libraryItem, null, 2));
        }

        let uri = `${BASE_URL}/audiobookshelf/api/items/${libraryItem.id}/cover`;

        const image = {
          uri: uri,
        };

        return (
          <BookListItem
            name={libraryItem.media?.metadata?.title ?? ""}
            author={libraryItem.media?.metadata?.authorName ?? ""}
            image={image}
            key={libraryItem.id}
            onPress={() => {
              if (libraryItem.id) {
                onPressBook?.(libraryItem.id);
              }
            }}
          />
        );
      })}
    </YStack>
  );
};
