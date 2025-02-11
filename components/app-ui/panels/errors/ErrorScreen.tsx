import * as React from "react";
import { Box } from "../../core/components/layout/Box";
import { Spacing } from "../../core/components/layout/Spacing";
import { ErrorPanel, ErrorPanelProps } from "./ErrorPanel";

export const ErrorScreen: React.FC<ErrorPanelProps> = (props) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spacing num={4} />
      <ErrorPanel {...props} />
    </Box>
  );
};
