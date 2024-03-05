import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CustomButton(props) {
  const nav = useNavigation();
  const [buttonColor, setButtonColor] = useState("#7765e3");

  return (
    <View style={styles.buttonConatainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { backgroundColor: "#5c4fab" },
        ]}
        onPress={() => {
          nav.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

CustomButton.defaultProps = {
  text: "Save",
};

const styles = StyleSheet.create({
  buttonConatainer: {
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
    shadowColor: "#2F323A",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
    backgroundColor: "#7765e3",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
