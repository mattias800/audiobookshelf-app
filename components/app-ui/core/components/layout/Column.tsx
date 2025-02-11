import * as React from "react";
import { Box, BoxProps } from "./Box";

export interface ColumnProps extends Omit<BoxProps, "row"> {}

export const Column: React.FC<ColumnProps> = (props) => <Box {...props} />;
