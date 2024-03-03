import { StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";
import AdjustButton from "./AdjustButton";

export default function WeightInput(props) {
  return (
    <View style={styles.container}>
      <AdjustButton type="Minus" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          caretHidden={true}
          value={props.weight}
          keyboardType="numeric"
          enterKeyHint="done"
        ></TextInput>
      </View>
      <AdjustButton type="Plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    height: 100,
    width: 80,
  },
  textInput: {
    flex: 1,
    fontSize: 60,
    color: "#2F323A",
    backgroundColor: "lightgrey",
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 5,
  },
});
