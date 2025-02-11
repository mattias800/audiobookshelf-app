import * as React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { BASE_URL } from "@/api/BaseUrl";
import { ImageURISource } from "react-native/Libraries/Image/ImageSource";
import { Row } from "@/components/app-ui/core/components/layout/Row";
import { Box } from "@/components/app-ui/core/components/layout/Box";
import { Txt } from "@/components/app-ui/core/components/text/Txt";
import { BlurView } from "expo-blur";
import { Column } from "@/components/app-ui/core/components/layout/Column";

export interface BookListItemProps {
  onPress?: () => void;
  image: ImageURISource;
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
    <ImageBackground
      source={image}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
    >
      <View style={styles.overlay} />
      <BlurView intensity={40} tint={"dark"} style={styles.blurContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={image}
            width={100}
            height={100}
            defaultSource={fallbackBookUri}
            borderRadius={16}
          />
          <Column gap={2} indent={1}>
            <Txt variant={"bold"} color={"white"} size={"large"}>
              {name}
            </Txt>
            <Txt color={"white"}>{author}</Txt>
          </Column>
        </View>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 105,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
