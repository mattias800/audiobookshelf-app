import * as React from "react";
import { View } from "react-native";
import { Metrics } from "@/constants/Metrics";

export interface SpaceProps {
  num?: number;
}

export const Space = React.memo<SpaceProps>(({ num = 1 }) => {
  const s = num * Metrics.spacing;
  return <View style={{ width: s, height: s }} />;
});
