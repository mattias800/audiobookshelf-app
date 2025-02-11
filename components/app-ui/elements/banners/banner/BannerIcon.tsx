import { Icon } from "@rneui/base";
import * as React from "react";
import { Spinner } from "../../spinner/Spinner";

export interface BannerIconProps {
  loading: boolean;
  color: string;
  icon: string | undefined;
}

export const BannerIcon: React.FC<BannerIconProps> = ({
  icon,
  color,
  loading,
}) => {
  if (loading) {
    return <Spinner size={"small"} color={color} />;
  }

  if (icon) {
    return <Icon name={icon} type={"font-awesome"} size={24} color={color} />;
  }

  return null;
};
