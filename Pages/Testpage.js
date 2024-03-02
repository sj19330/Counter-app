import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import CustomSlider from "../Components/CustomSlider";
import PageTitle from "../Components/PageTitle";

export default function TrackFood() {
  return (
    <View style={styles.page}>
      <View style={styles.title}>
        <PageTitle
          text="How much more/less did you eat today?"
          style={styles.titleText}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.captionContainer}>
          <Text>Less</Text>
          <Text>More</Text>
        </View>
        <View style={styles.slidersContainer}>
          <CustomSlider label="Breakfast" />
          <CustomSlider label="Lunch" />
          <CustomSlider label="Dinner" />
          <CustomSlider label="Snacks" />
        </View>
        <View style={styles.buttonConatainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f7f5fb",
    padding: 10,
  },
  title: {
    flex: 1,
    borderColor: "green",
    borderWidth: 1,
  },
  body: {
    flex: 4,
    borderColor: "green",
    borderWidth: 1,
  },
  captionContainer: {
    flex: 2,
    height: 30,
    borderColor: "green",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 15,
  },
  slidersContainer: {
    borderColor: "green",
    borderWidth: 1,
    flex: 18,
  },
  buttonConatainer: {
    borderColor: "green",
    borderWidth: 1,
    flex: 3,
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
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
