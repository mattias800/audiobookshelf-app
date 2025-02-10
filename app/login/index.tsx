import * as React from "react";
import { Link } from "expo-router";
import { Button, ScrollView, SizableText, YStack } from "tamagui";

export interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  return (
    <ScrollView paddingVertical={"$16"} paddingHorizontal={"$4"}>
      <YStack gap={"$4"}>
        <SizableText size={"$8"}>Welcome to audiobookshelf!</SizableText>

        <SizableText>
          To start using the app you need to login on an audiobookshelf server.
        </SizableText>

        <Link href={"/login/server"} asChild>
          <Button>Let's go</Button>
        </Link>
      </YStack>
    </ScrollView>
  );
};

export default Index;
