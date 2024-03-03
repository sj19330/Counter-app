import { StyleSheet, View, Pressable, Text } from "react-native";

export default function AdjustButton(props) {
  const { type } = props;
  return (
    <Pressable style={styles.container} onPress={() => alert(type)}>
      <Text style={styles.text}>{type === "Plus" ? "+" : "-"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "lightgrey",
    marginHorizontal: 10,
    borderRadius: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "grey",
  },
});
