import * as React from "react";
import { Children, ReactNode } from "react";
import { DimensionValue, View, ViewProps, ViewStyle } from "react-native";
import { Space } from "./Space";
import { Metrics } from "@/constants/Metrics";

export type BoxChildren =
  | ReactNode
  | null
  | undefined
  | ""
  | false
  | Array<BoxChildren | ReactNode | null | undefined>;

export interface BoxProps {
  children?: BoxChildren;
  style?: ViewProps["style"];
  spacing?: number;
  indent?: number;
  row?: boolean;
  gap?: number;
  background?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  overflow?: ViewStyle["overflow"];
  minWidth?: DimensionValue;
  maxWidth?: DimensionValue;
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  width?: DimensionValue;
  height?: DimensionValue;
  flex?: ViewStyle["flex"];
  flexGrow?: ViewStyle["flexGrow"];
}

export const Box: React.FC<BoxProps> = ({
  children,
  row,
  indent,
  spacing,
  gap,
  background,
  borderRadius,
  borderColor,
  borderWidth = 0,
  overflow,
  minWidth,
  maxWidth,
  justifyContent,
  alignItems,
  width,
  height,
  flex,
  flexGrow,
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: row ? "row" : "column",
          paddingVertical: spacing ? Metrics.spacing * spacing : undefined,
          paddingHorizontal: indent ? Metrics.indent * indent : undefined,
          backgroundColor: background,
          borderRadius,
          borderColor,
          borderWidth,
          borderStyle: borderWidth > 0 ? "solid" : undefined,
          overflow,
          minWidth,
          maxWidth,
          justifyContent,
          alignItems,
          width,
          height,
          flex,
          flexGrow,
        },
        style,
      ]}
    >
      {gap
        ? Children.map(children, (child, index) => (
            <>
              {index > 0 ? <Space num={gap} /> : null}
              {child}
            </>
          ))
        : children}
    </View>
  );
};
