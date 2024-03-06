import { StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";
import AdjustButton from "./AdjustButton";

export default function WeightInput(props) {
  const handleChange = (newValue) => {
    if (newValue.length <= 6) {
      props.setWeight(newValue);
    }
    console.log(props.weight.length);
  };
  const smallText = props.weight.length > 2;
  const verySmallText = props.weight.length > 4;

  return (
    <View style={styles.container}>
      <AdjustButton
        type="Minus"
        setWeight={props.setWeight}
        weight={props.weight}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            smallText && { fontSize: 30 },
            verySmallText && { fontSize: 20 },
          ]}
          value={props.weight}
          keyboardType="numeric"
          enterKeyHint="done"
          onChangeText={(newValue) => handleChange(newValue)}
        ></TextInput>
      </View>
      <AdjustButton
        type="Plus"
        setWeight={props.setWeight}
        weight={props.weight}
      />
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
    fontSize: 55,
    color: "#2F323A",
    backgroundColor: "lightgrey",
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 5,
    textAlign: "center",
  },
});
