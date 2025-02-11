import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LhdsColors } from "../../../../theme/LhdsColors";
import { Metrics } from "../../../../theme/Metrics";
import { Box, BoxChildren } from "../../../core/components/layout/Box";
import { Column } from "../../../core/components/layout/Column";
import { Heading } from "../../../core/components/text/Heading";
import { Indent } from "../../../core/components/layout/Indent";
import { Row } from "../../../core/components/layout/Row";
import { Space } from "../../../core/components/layout/Space";
import { Txt } from "../../../core/components/text/Txt";
import { BannerIcon } from "./BannerIcon";

export type BannerVariant =
  | "standard"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface BannerProps {
  icon?: string;
  headerText?: string;
  text?: string;
  loading?: boolean;
  contentRight?: BoxChildren;
  variant?: BannerVariant;
  children?: BoxChildren;
}

const iconPerVariant: Record<BannerVariant, string | undefined> = {
  standard: "exclamation-circle",
  info: "exclamation-circle",
  success: "check-circle",
  warning: "exclamation-circle",
  error: "exclamation-triangle",
};

export const Banner: React.FC<BannerProps> = ({
  headerText,
  text,
  children,
  contentRight,
  icon,
  variant = "standard",
  loading = false,
}) => {
  return (
    <View
      style={[styles.banner, { backgroundColor: colorsForVariant[variant].bg }]}
    >
      <Row justifyContent={"space-between"}>
        <Row
          flex={0}
          width={64}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <BannerIcon
            loading={loading}
            color={colorsForVariant[variant].icon}
            icon={icon ?? iconPerVariant[variant]}
          />
        </Row>
        <Row justifyContent={"space-between"} flexGrow={1}>
          <Column justifyContent={"center"}>
            {headerText ? <Heading variant={"h5"}>{headerText}</Heading> : null}
            {text ? (
              <>
                {headerText && <Space />}
                <Txt>{text}</Txt>
              </>
            ) : null}
          </Column>
          {contentRight && (
            <>
              <Indent />
              <Column justifyContent={"center"}>{contentRight}</Column>
            </>
          )}
        </Row>
      </Row>
      {children && (
        <Row>
          <Box minWidth={64} />
          <Box>
            <>
              <Space />
              {children}
            </>
          </Box>
        </Row>
      )}
    </View>
  );
};

const colorsForVariant: Record<BannerVariant, { bg: string; icon: string }> = {
  standard: { bg: LhdsColors.ui200, icon: LhdsColors.ui500 },
  info: { bg: LhdsColors.blue200, icon: LhdsColors.blue500 },
  success: { bg: LhdsColors.green200, icon: LhdsColors.green500 },
  warning: { bg: LhdsColors.orange200, icon: LhdsColors.orange500 },
  error: { bg: LhdsColors.red200, icon: LhdsColors.red500 },
};

const styles = StyleSheet.create({
  banner: {
    borderRadius: 16,
    padding: Metrics.spacing * 2,
    paddingRight: Metrics.indent * 2,
  },
});
