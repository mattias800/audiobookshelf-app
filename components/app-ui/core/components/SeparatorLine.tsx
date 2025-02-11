import * as React from "react";
import { DimensionValue, View } from "react-native";
import { LhdsColors } from "@/constants/LhdsColors";

export interface SeparatorLineProps {
  color?: string;
  vertical?: boolean;
  size?: DimensionValue;
  width?: number;
}

export const SeparatorLine: React.FC<SeparatorLineProps> = ({
  size = "100%",
  width = 1,
  vertical = false,
  color = LhdsColors.ui300,
}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: vertical ? size || "100%" : width || 1,
        width: vertical ? width || 1 : size || "100%",
      }}
    />
  );
};
