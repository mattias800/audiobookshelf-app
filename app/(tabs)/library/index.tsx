import { LibraryList } from "@/features/library-list/LibraryList";
import { ScrollView } from "tamagui";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView>
        <LibraryList onPressLibrary={(id) => router.push(`library/${id}`)} />
      </ScrollView>
    </SafeAreaView>
  );
}
