import * as React from "react";
import { Box, BoxProps } from "./Box";

export interface SpacingProps extends BoxProps {
  num?: number;
}

export const Spacing: React.FC<SpacingProps> = ({ num = 1, ...boxProps }) => (
  <Box {...boxProps} spacing={num} />
);
