import { ScrollView, StyleSheet, Text, View} from "react-native";
import { styles } from "./style";

export default function Page() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}> Luquinhas lanches</Text>
          <Text style={styles.subtitle}>This is the first page of your app.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

