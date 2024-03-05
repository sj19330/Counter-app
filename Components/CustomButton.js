import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CustomButton(props) {
  const nav = useNavigation();

  const handlePress = () => {
    props.onPress();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { width: props.width },
        pressed && { backgroundColor: "#5c4fab" },
      ]}
      onPress={() => handlePress()}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
}

CustomButton.defaultProps = {
  text: "Save",
  width: 100,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7765e3",
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2F323A",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: "#f7f5fb",
    fontSize: 20,
  },
});
