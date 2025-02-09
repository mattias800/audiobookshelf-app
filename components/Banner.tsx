import * as React from "react";
import { Card, SizableText } from "tamagui";

export interface BannerProps {
  text: string;
}

export const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <Card theme={"red"} padding={"$4"}>
      <SizableText>{text}</SizableText>
    </Card>
  );
};
