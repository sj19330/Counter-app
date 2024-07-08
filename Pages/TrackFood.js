import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import CustomSlider from "../Components/CustomSlider";
import PageTitle from "../Components/PageTitle";
import { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Components/CustomButton";
import { DBProvider } from "../DbProvider";

export default function TrackFood() {
  const [breakfastRange, setBreakfastRange] = useState(3);
  const [lunchRange, setLunchRange] = useState(3);
  const [dinnerRange, setDinnerRange] = useState(3);
  const [snackRange, setSnackRange] = useState(3);
  const db = useContext(DBProvider);

  const nav = useNavigation();

  useEffect(() => {
    loadData(db).then((lastEntry) => {
      //add if to see if entry is from today
      if (true) {
        setBreakfastRange(lastEntry.breakfast);
        setLunchRange(lastEntry.lunch);
        setDinnerRange(lastEntry.dinner);
        setSnackRange(lastEntry.snacks);
      }
    });
  }, []);

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
          <CustomButton
            onPress={async () =>
              handlePress(
                db,
                breakfastRange,
                lunchRange,
                dinnerRange,
                snackRange,
                nav
              )
            }
            width={100}
            text="Save"
          />
        </View>
      </View>
    </View>
  );
}

const handlePress = async (db, breakfast, lunch, dinner, snacks, nav) => {
  await db.runAsync(
    "INSERT INTO foodLog (time, breakfast, lunch, dinner, snacks) VALUES (?, ?, ?, ?, ?);",
    Date.now(),
    breakfast,
    lunch,
    dinner,
    snacks
  );
  // print table for debugging purposes
  console.log(await db.getAllAsync("SELECT * FROM foodLog"));
  nav.goBack();
};

const loadData = async (db) => {
  const data = await db.getAllAsync("SELECT * FROM foodLog");
  const lastEntry = data[data.length - 1];
  return lastEntry;
};

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
