import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import CustomButton from "../Components/CustomButton";

export default function HomePage() {
  const nav = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to Counter</Text>
      </View>
      <View style={styles.body}>
        <CustomButton
          width="60%"
          text="Track Food"
          onPress={() => nav.navigate("Track Food")}
        />
        <CustomButton
          width="60%"
          text="Log Weight"
          onPress={() => nav.navigate("Weight Log")}
        />
        <CustomButton
          width="60%"
          text="View Progress"
          onPress={() => nav.navigate("Progress")}
        />
        <CustomButton
          width="60%"
          text="Test Page"
          onPress={() => nav.navigate("Test")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 150,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2F323A",
  },
  body: {
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingVertical: 120,
  },
});
