import * as React from "react";
import { StyleSheet } from "react-native";
import { LhdsColors } from "../../../theme/LhdsColors";
import { Box } from "../../core/components/layout/Box";
import { Txt } from "../../core/components/text/Txt";

export type BadgeVariant = "info" | "warning" | "error";

export interface BadgeProps {
  label?: string | number;
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "info" }) => {
  return (
    <Box
      overflow={"hidden"}
      borderRadius={18 / 2}
      borderWidth={0}
      minWidth={18}
      height={18}
      alignItems={"center"}
      justifyContent={"center"}
      style={styles[variant]}
    >
      <Txt size={"smaller"} color={"#ffffff"} lineHeight={18}>
        {label}
      </Txt>
    </Box>
  );
};

const styles = StyleSheet.create({
  info: {
    backgroundColor: LhdsColors.blue500,
  },

  warning: {
    backgroundColor: LhdsColors.orange400,
  },

  error: {
    backgroundColor: LhdsColors.red300,
  },
});
