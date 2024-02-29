import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import Slider from "../Components/Slider";

export default function TrackFood() {
  return (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          How much more/less did you eat today?
        </Text>
      </View>
      <ScrollView style={styles.body}>
        <Slider></Slider>
        <Slider></Slider>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f7f5fb",
  },
  titleContainer: { marginTop: 100, marginHorizontal: 20, color: "#2f323a" },
  titleText: {
    fontSize: 30,
  },
  body: {
    margin: 20,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "red",
  },
});
