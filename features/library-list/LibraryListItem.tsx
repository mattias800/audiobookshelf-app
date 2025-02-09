import { Cloud, Moon, Star, Sun } from "@tamagui/lucide-icons";
import * as React from "react";
import { ListItem, YGroup } from "tamagui";

export interface LibraryListItemProps {
  name: string;
  onPress?: () => void;
}

export const LibraryListItem: React.FC<LibraryListItemProps> = ({
  name,
  onPress,
}) => {
  return (
    <YGroup alignSelf={"center"} bordered size="$4" onPress={onPress}>
      <YGroup.Item>
        <ListItem hoverTheme icon={Star} title={name} />
      </YGroup.Item>
    </YGroup>
  );
};
