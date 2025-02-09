import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getLibrariesOptions } from "@/api/client/@tanstack/react-query.gen";
import { Spinner, YStack } from "tamagui";
import { LibraryListItem } from "@/features/library-list/LibraryListItem";
import { Banner } from "@/components/Banner";

export interface LibraryListProps {
  onPressLibrary: (libraryId: string) => void;
}

export const LibraryList: React.FC<LibraryListProps> = ({ onPressLibrary }) => {
  const { data, error, isLoading } = useQuery({
    ...getLibrariesOptions(),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <Banner text={error?.message ?? "Unknown error."} />;
  }

  return (
    <YStack gap={"$2"} paddingHorizontal={"$4"}>
      {data?.libraries?.map((library) => (
        <LibraryListItem
          name={library.name ?? ""}
          key={library.id}
          onPress={() => {
            if (library.id) {
              onPressLibrary(library.id);
            }
          }}
        />
      ))}
    </YStack>
  );
};
