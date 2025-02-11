import * as React from "react";
import { Box, BoxProps } from "./Box";

export interface RowProps extends Omit<BoxProps, "row"> {}

export const Row: React.FC<RowProps> = (boxProps) => <Box {...boxProps} row />;
