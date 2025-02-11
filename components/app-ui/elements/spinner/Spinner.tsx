import * as React from "react";
import { ActivityIndicator } from "react-native";
import { StenaColors } from "../../../theme/StenaColors";

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
}

export type SpinnerSize = "large" | "small";

export const Spinner: React.FC<SpinnerProps> = ({
  size = "large",
  color = StenaColors.modernRed,
}) => <ActivityIndicator size={size} color={color} />;
