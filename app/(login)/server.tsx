import * as React from "react";
import { useCallback, useState } from "react";
import { Button, Input, Label, ScrollView, Spinner, YStack } from "tamagui";

export interface ServerProps {}

export const Server: React.FC<ServerProps> = () => {
  const [loading, setLoading] = useState(false);

  const onClickContinue = useCallback(() => {
    setLoading(true);
  }, []);

  return (
    <ScrollView paddingVertical={"$8"} paddingHorizontal={"$4"}>
      <YStack gap={"$4"}>
        <YStack>
          <Label htmlFor="server">Please enter server</Label>
          <Input id={"server"} placeholder={"https://my.server.com"} />
        </YStack>

        <Button disabled={loading} onPress={onClickContinue}>
          Lets go {loading && <Spinner size="small" color="$green10" />}
        </Button>
      </YStack>
    </ScrollView>
  );
};

export default Server;
