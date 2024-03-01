import { View, Text, StyleSheet } from "react-native";

export default function Slider(props) {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    bordercolor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  line: { borderWidth: 1, borderColor: "black", width: "80%" },
});
