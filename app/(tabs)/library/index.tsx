import { LibraryList } from "@/features/library-list/LibraryList";
import { ScrollView } from "tamagui";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView paddingTop={"$4"}>
      <LibraryList onPressLibrary={(id) => router.push(`library/${id}`)} />
    </ScrollView>
  );
}
