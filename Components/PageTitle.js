import { View, Text, StyleSheet } from "react-native";

export default function Title(props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: { flex: 1, width: "80%" },
  titleText: { paddingTop: 35, paddingLeft: 35, fontSize: 30 },
});
