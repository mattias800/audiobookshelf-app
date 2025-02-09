import * as React from "react";
import { Image } from "react-native";
import { ListItem, YGroup } from "tamagui";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import { BASE_URL } from "@/api/BaseUrl";
import { ImageURISource } from "react-native/Libraries/Image/ImageSource";

export interface BookListItemProps {
  onPress?: () => void;
  image: ImageSourcePropType;
  name: string;
  author: string;
}

const fallbackBookUri: ImageURISource = {
  uri: `${BASE_URL}/audiobookshelf/book_placeholder.jpg`,
};

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
            <Image
              source={image}
              width={100}
              height={100}
              defaultSource={fallbackBookUri}
              borderRadius={16}
            />
          }
        />
      </YGroup.Item>
    </YGroup>
  );
};
