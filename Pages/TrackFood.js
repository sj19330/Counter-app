import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import CustomSlider from "../Components/CustomSlider";
import PageTitle from "../Components/PageTitle";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";

export default function TrackFood() {
  const [breakfastRange, setBreakfastRange] = useState(3);
  const [lunchRange, setLunchRange] = useState(3);
  const [dinnerRange, setDinnerRange] = useState(3);
  const [snackRange, setSnackRange] = useState(3);

  const nav = useNavigation();

  const handleNavigation = () => {
    nav.goBack();
  };

  return (
    <View style={styles.page}>
      <View style={styles.title}>
        <PageTitle text="How much more/less did you eat today?" />
      </View>
      <View style={styles.body}>
        <View style={styles.captionContainer}>
          <Text>Less</Text>
          <Text>Same</Text>
          <Text>More</Text>
        </View>
        <View style={styles.slidersContainer}>
          <CustomSlider
            label="Breakfast"
            setRange={setBreakfastRange}
            range={breakfastRange}
          />
          <CustomSlider
            label="Lunch"
            setRange={setLunchRange}
            range={lunchRange}
          />
          <CustomSlider
            label="Dinner"
            setRange={setDinnerRange}
            range={dinnerRange}
          />
          <CustomSlider
            label="Snacks"
            setRange={setSnackRange}
            range={snackRange}
          />
        </View>
        <View style={styles.buttonConatainer}>
          <CustomButton onPress={handleNavigation} />
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
  },
  body: {
    flex: 4,
  },
  captionContainer: {
    flex: 1,
    height: 30,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 15,
  },
  slidersContainer: {
    flex: 8,
    // backgroundColor: "green",
  },
  buttonConatainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});
