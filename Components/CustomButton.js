import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CustomButton() {
  const nav = useNavigation();

  return (
    <View style={styles.buttonConatainer}>
      <Pressable style={styles.button} onPress={() => nav.navigate("Home")}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonConatainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#7765e3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
