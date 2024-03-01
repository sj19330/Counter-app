import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import CustomSlider from "../Components/CustomSlider";
import PageTitle from "../Components/PageTitle";

export default function TrackFood() {
  return (
    <View style={styles.page}>
      <PageTitle text="How much more/less did you eat today?" />
      <ScrollView style={styles.body}>
        <CustomSlider />
        <CustomSlider />
        <CustomSlider />
        <CustomSlider />
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
