import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Column } from "../../core/components/layout/Column";
import { Link } from "../../core/components/text/Link";
import { Txt } from "../../core/components/text/Txt";

export interface ResultItem {
  text: string;
  linkText?: string;
  onClickLink?: () => void;
}

export interface ResultItemProps extends ResultItem {}

export const ResultListRow: React.FC<ResultItemProps> = ({
  text,
  onClickLink,
  linkText,
}) => {
  return (
    <Column>
      <Txt>{text}</Txt>
      {linkText && (
        <View style={styles.link}>
          <Link onPress={onClickLink}>{linkText}</Link>
        </View>
      )}
    </Column>
  );
};

const styles = StyleSheet.create({
  link: {
    marginTop: 4,
  },
});
