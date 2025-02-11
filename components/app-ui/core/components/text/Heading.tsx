import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { LhdsColors } from "@/constants/LhdsColors";

export interface HeadingProps {
  children?: string;
  variant?: HeadingVariant;
  color?: string;
}

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading: React.FC<HeadingProps> = ({
  children,
  variant = "h3",
  color,
}) => {
  return (
    <Text
      style={[styles.heading, styles[variant], color ? { color } : undefined]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "StenaSans-Regular",
    color: LhdsColors.ui900,
    letterSpacing: 0,
    margin: 0,
  },
  h1: {
    fontSize: 28,
    lineHeight: 40,
  },

  h2: {
    fontSize: 24,
    lineHeight: 32,
  },

  h3: {
    fontSize: 20,
    lineHeight: 24,
  },

  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    fontFamily: "StenaSans-Bold",
  },

  h5: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
    fontFamily: "StenaSans-Bold",
  },

  h6: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
    fontFamily: "StenaSans-Bold",
  },
});
