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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Prevent the splash screen from auto-hiding before asset loading is complete.

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthProvider
          renderWhenAuth={() => {
            console.log("renderWhenAuth");
            return (
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
            );
          }}
          renderWhenNotAuth={() => {
            console.log("renderWhenNotAuth");
            return (
              <Stack>
                <Stack.Screen name="(login)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
            );
          }}
        />
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
