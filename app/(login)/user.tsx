import * as React from "react";
import { Button, Input, Label, ScrollView, YStack } from "tamagui";

export interface UserProps {}

export const User: React.FC<UserProps> = () => {
  return (
    <ScrollView paddingVertical={"$8"} paddingHorizontal={"$4"}>
      <YStack gap={"$4"}>
        <YStack>
          <Label htmlFor="username">Username</Label>
          <Input id={"username"} />
        </YStack>

        <YStack>
          <Label htmlFor="password">Password</Label>
          <Input id={"password"} />
        </YStack>

        <Button>Lets go</Button>
      </YStack>
    </ScrollView>
  );
};

export default User;
