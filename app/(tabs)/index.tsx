import * as React from "react";
import { ScrollView, SizableText } from "tamagui";

export interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  return (
    <ScrollView paddingTop={"$4"}>
      <SizableText>Start</SizableText>
    </ScrollView>
  );
};

export default Index;
