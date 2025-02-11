import * as React from "react";
import { Box, BoxProps } from "./Box";

export interface IndentProps extends BoxProps {
  num?: number;
}

export const Indent: React.FC<IndentProps> = ({ num = 1, ...boxProps }) => (
  <Box {...boxProps} indent={num} />
);
