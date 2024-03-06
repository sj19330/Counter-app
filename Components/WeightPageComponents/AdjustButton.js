import { StyleSheet, Pressable, Text } from "react-native";

export default function AdjustButton(props) {
  const handlePress = () => {
    const w = parseFloat(props.weight);
    if (props.type === "Plus" && w < 999) {
      props.setWeight((w + 0.5).toString());
    } else if (props.type === "Minus" && w >= 0.5) {
      props.setWeight((w - 0.5).toString());
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => handlePress()}>
      <Text style={styles.text}>{props.type === "Plus" ? "+" : "-"}</Text>
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
