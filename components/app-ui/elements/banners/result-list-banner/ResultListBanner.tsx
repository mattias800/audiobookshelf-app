import * as React from "react";
import { ResultList } from "../../result-list/ResultList";
import { ResultItem, ResultListRow } from "../../result-list/ResultListRow";
import { Banner, BannerProps } from "../banner/Banner";

export interface ResultListBannerState {
  headerText?: string;
  text?: string;
  items?: Array<ResultItem>;
}

export interface ResultListBannerProps
  extends Omit<BannerProps, "headerText" | "text"> {
  bannerState: ResultListBannerState;
}

export const ResultListBanner: React.FC<ResultListBannerProps> = ({
  bannerState,
  variant = "standard",
  ...bannerProps
}) => {
  return (
    <Banner
      {...bannerProps}
      headerText={bannerState.headerText}
      text={bannerState.text}
      variant={variant}
    >
      {bannerState.items && (
        <>
          <ResultList>
            {bannerState.items.map((item, index) => (
              <ResultListRow
                text={item.text}
                linkText={item.linkText}
                onClickLink={item.onClickLink}
                key={index}
              />
            ))}
          </ResultList>
        </>
      )}
    </Banner>
  );
};
