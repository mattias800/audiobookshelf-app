import * as React from "react";
import { Image } from "react-native";
import { ListItem, SizableText, YGroup } from "tamagui";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

export interface BookListItemProps {
  onPress?: () => void;
  image: ImageSourcePropType | undefined;
  name: string;
  author: string;
}

export const BookListItem: React.FC<BookListItemProps> = ({
  onPress,
  name,
  author,
  image,
}) => {
  return (
    <YGroup alignSelf={"center"} bordered size="$4" onPress={onPress}>
      <YGroup.Item>
        <ListItem
          hoverTheme
          title={name}
          subTitle={author}
          icon={
            image == null ? undefined : (
              <Image source={image} width={100} height={100} />
            )
          }
        />
      </YGroup.Item>
    </YGroup>
  );
};
