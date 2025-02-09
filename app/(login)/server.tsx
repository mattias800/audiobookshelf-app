import * as React from "react";
import { useCallback, useState } from "react";
import { Button, Input, Label, ScrollView, Spinner, YStack } from "tamagui";
import { Banner } from "@/components/Banner";
import { Check } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { asyncDelay } from "@/common/async/AsyncDelay";
import { validateServerUrl } from "@/common/validation/ServerUrlValidator";

export interface ServerProps {}

export const Server: React.FC<ServerProps> = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [server, setServer] = useState("");

  const router = useRouter();

  const onClickContinue = useCallback(async () => {
    try {
      setMessage(undefined);
      const v = validateServerUrl(server);
      if (v.type === "error") {
        setMessage(v.message);
        return;
      }

      setLoading(true);
      const r = await fetch(`${v.serverUrl}/status`);
      if (r.status === 200) {
        setLoading(false);
        setSuccess(true);
        await asyncDelay(1000);
        router.push("/user");
      } else {
        setMessage("Server is not reachable.");
      }
    } catch (e) {
      if (e instanceof Error) {
        setMessage(e.message);
      } else {
        setMessage("Unknown error.");
      }
    }
  }, []);

  return (
    <ScrollView paddingVertical={"$4"} paddingHorizontal={"$4"}>
      <YStack gap={"$8"}>
        <YStack>
          <Label htmlFor="server">Please enter server</Label>
          <Input
            id={"server"}
            placeholder={"https://my.server.com"}
            value={server}
            onChangeText={setServer}
          />
        </YStack>
        <Button disabled={loading} onPress={onClickContinue}>
          Lets go
          {loading && <Spinner size="small" color="$green10" />}
          {success && <Check size={"$size.1"} color="$green10" />}
        </Button>

        {message && <Banner text={message} />}
      </YStack>
    </ScrollView>
  );
};

export default Server;
