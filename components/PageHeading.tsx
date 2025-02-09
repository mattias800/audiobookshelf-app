import * as React from "react";
import { SizableText } from "tamagui";

export interface PageHeadingProps {
  text: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ text }) => {
  return <SizableText size={"$12"}>{text}</SizableText>;
};
