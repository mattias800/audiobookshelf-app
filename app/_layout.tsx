import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import tamaguiConfig from "@/tamagui.config";
import { TamaguiProvider } from "tamagui";
import { Provider } from "react-redux";
import { store } from "@/common/redux/Store"; // Prevent the splash screen from auto-hiding before asset loading is complete.

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <AuthProvider
              renderWhenAuth={() => {
                console.log("renderWhenAuth");
                return (
                  <Stack key={"tabs"}>
                    <Stack.Screen
                      name="(tabs)"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                  </Stack>
                );
              }}
              renderWhenNotAuth={() => {
                console.log("renderWhenNotAuth");
                return (
                  <Stack key={"login"}>
                    <Stack.Screen
                      name="login"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                  </Stack>
                );
              }}
            />
            <StatusBar style="auto" />
          </ThemeProvider>
        </TamaguiProvider>
      </QueryClientProvider>
    </Provider>
  );
}
