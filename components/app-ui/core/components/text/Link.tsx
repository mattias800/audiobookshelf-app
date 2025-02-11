import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { LhdsColors } from "@/constants/LhdsColors";

export interface LinkProps {
  children?: string;
  onPress?: () => void;
}

export const Link: React.FC<LinkProps> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: LhdsColors.blue600,
  },
});
