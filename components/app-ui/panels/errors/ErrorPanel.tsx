import * as React from "react";
import { Box } from "../../core/components/layout/Box";
import { Banner, BannerProps } from "../../elements/banners/banner/Banner";

export interface ErrorPanelProps extends BannerProps {}

export const ErrorPanel: React.FC<ErrorPanelProps> = ({ ...bannerProps }) => {
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <Banner variant={"error"} {...bannerProps} />
    </Box>
  );
};
