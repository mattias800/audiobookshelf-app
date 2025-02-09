import * as React from "react";
import { useCallback, useState } from "react";
import {
  Button,
  Input,
  Label,
  ScrollView,
  SizableText,
  Spinner,
  YStack,
} from "tamagui";
import { useAppDispatch } from "@/common/redux/ReduxHooks";
import { Check } from "@tamagui/lucide-icons";
import { Banner } from "@/components/Banner";
import { login } from "@/api/endpoints/Login";
import { asyncDelay } from "@/common/async/AsyncDelay";
import { authSlice } from "@/common/redux/auth/AuthSlice";
import { useRouter } from "expo-router";

export interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const router = useRouter();

  const dispatch = useAppDispatch();

  const onClickContinue = useCallback(async () => {
    try {
      setLoading(false);
      setMessage(undefined);
      if (!username || !password) {
        setMessage("Please provide username and password.");
        return;
      }

      setLoading(true);
      const r = await login(username, password);
      setLoading(false);

      switch (r.type) {
        case "success":
          setSuccess(true);
          await asyncDelay(1000);
          dispatch(authSlice.actions.setToken(r.user.token));
          router.navigate("/");
          break;
        case "unauthorized":
          setMessage("Invalid username or password.");
          break;
        case "invalid":
          setMessage("Server was not able to process request.");
          break;
        default:
          console.log("daaaa");
          setMessage("Something went wrong.");
      }
    } catch (e) {
      if (e instanceof Error) {
        setMessage(e.message);
      } else {
        setMessage("Unknown error.");
      }
    }
  }, [username, password]);

  return (
    <ScrollView paddingVertical={"$8"} paddingHorizontal={"$4"}>
      <YStack gap={"$4"}>
        <SizableText>Please enter your credentials</SizableText>

        <YStack>
          <Label htmlFor="username">Username</Label>
          <Input
            id={"username"}
            value={username}
            onChangeText={setUsername}
            autoCapitalize={"none"}
          />
        </YStack>

        <YStack>
          <Label htmlFor="password">Password</Label>
          <Input
            id={"password"}
            value={password}
            onChangeText={setPassword}
            autoCapitalize={"none"}
            secureTextEntry
          />
        </YStack>

        <Button disabled={loading || success} onPress={onClickContinue}>
          Sign in
          {loading && <Spinner size="small" color="$green10" />}
          {success && <Check size={"$size.1"} color="$green10" />}
        </Button>

        {message && <Banner text={message} />}
      </YStack>
    </ScrollView>
  );
};

export default User;
