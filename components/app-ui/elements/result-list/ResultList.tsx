import * as React from "react";
import { Children } from "react";
import { Text, View } from "react-native";
import { BoxChildren } from "../../core/components/layout/Box";
import { Row } from "../../core/components/layout/Row";

export interface ResultListProps {
  children?: BoxChildren;
}

export const ResultList: React.FC<ResultListProps> = ({ children }) => {
  return (
    <View>
      {Children.map(children, (child) => (
        <Row gap={1}>
          <Text>{`\u2022`}</Text>
          {child}
        </Row>
      ))}
    </View>
  );
};
