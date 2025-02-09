import * as React from "react";
import { useCallback, useState } from "react";
import { Button, Input, Label, ScrollView, Spinner, YStack } from "tamagui";
import { Banner } from "@/components/Banner";
import { Check } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { asyncDelay } from "@/common/async/AsyncDelay";
import { validateServerUrl } from "@/common/validation/ServerUrlValidator";
import { useAppDispatch, useAppSelector } from "@/common/redux/ReduxHooks";
import { authSlice } from "@/common/redux/auth/AuthSlice";

export interface ServerProps {}

export const Server: React.FC<ServerProps> = () => {
  const initialServerUrl = useAppSelector(authSlice.selectors.serverUrl);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [server, setServer] = useState(initialServerUrl ?? "");
  const dispatch = useAppDispatch();

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
        dispatch(authSlice.actions.setServerUrl(v.serverUrl));
        await asyncDelay(1000);
        router.push("/user");
        await asyncDelay(1000);
        setSuccess(false);
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
  }, [server]);

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
        <Button disabled={loading || success} onPress={onClickContinue}>
          Use server
          {loading && <Spinner size="small" color="$green10" />}
          {success && <Check size={"$size.1"} color="$green10" />}
        </Button>

        {message && <Banner text={message} />}
      </YStack>
    </ScrollView>
  );
};

export default Server;
