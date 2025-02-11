import * as React from "react";
import {
  StyleSheet,
  Text as ReactText,
  TextProps as ReactTextProps,
} from "react-native";
import {LhdsColors} from "@/constants/LhdsColors";
import {FontMetrics} from "@/constants/Fonts";

export type TextVariant = "standard" | "caption" | "overline" | "bold";

export type TextSize = "large" | "medium" | "small" | "smaller";

export interface TextProps {
  children?: string | number | boolean | undefined | null;

  variant?: TextVariant;

  size?: TextSize;

  color?: string;

  lineHeight?: number;

  style?: ReactTextProps["style"];
}

export const Txt: React.FC<TextProps> = ({
  children,
  variant = "standard",
  size = "medium",
  color,
  lineHeight,
}) => {
  const styleColor = getVariantColor(variant);
  const c = color ?? styleColor ?? LhdsColors.ui900;

  return (
    <ReactText
      style={[styles[variant], styles[size], { color: c, lineHeight }]}
    >
      {children}
    </ReactText>
  );
};

const getVariantColor = (variant: TextVariant): string | undefined => {
  switch (variant) {
    case "caption":
    case "overline":
      return LhdsColors.ui600;
    default:
      return undefined;
  }
};

const styles = StyleSheet.create({
  standard: {
    fontFamily: "StenaSans-Regular",
  },
  caption: {
    fontStyle: "italic",
    letterSpacing: 0,
    fontSize: FontMetrics.fontSizeSmall,
    lineHeight: FontMetrics.lineHeightSmall,
  },
  overline: {
    fontSize: FontMetrics.fontSizeSmaller,
    fontWeight: "bold",
    lineHeight: FontMetrics.lineHeightSmaller,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "StenaSans-Bold",
  },

  large: {
    fontSize: FontMetrics.fontSizeLarge,
    lineHeight: FontMetrics.lineHeightLarge,
  },
  medium: {
    fontSize: FontMetrics.fontSizeMedium,
    lineHeight: FontMetrics.lineHeightMedium,
  },
  small: {
    fontSize: FontMetrics.fontSizeSmall,
    lineHeight: FontMetrics.lineHeightSmall,
  },
  smaller: {
    fontSize: FontMetrics.fontSizeSmaller,
    lineHeight: FontMetrics.lineHeightSmaller,
  },
});
