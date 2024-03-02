import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function CustomSlider(props) {
  const handleChange = (value) => {
    props.setRange(value);
  };
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={6}
        step={1}
        value={props.range}
        onValueChange={(value) => handleChange(parseInt(value))}
        minimumTrackTintColor="#2F323A"
        maximumTrackTintColor="#2F323A"
        thumbTintColor="#7765e3"
      />
      <Text>{props.range}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "85%",
    height: "100%",
  },
});
