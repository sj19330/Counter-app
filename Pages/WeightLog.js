import { StyleSheet, Text, View } from "react-native";
import PageTitle from "../Components/PageTitle";

import { TextInput } from "react-native-gesture-handler";
import WeightInput from "../Components/WeightPageComponents/WeightInput";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect } from "react";
import { DBProvider } from "../DbProvider";

export default function WeightLog() {
  const nav = useNavigation();
  const [weightInput, setWeightInput] = useState("0");
  const [firstEntryToday, setFirstEntryToday] = useState(true);
  const [lastEntryTime, setLastEntryTime] = useState(null);
  const db = useContext(DBProvider);

  useEffect(() => {
    loadWeight(db).then((lastEntry) => {
      setLastEntryTime(lastEntry.time);
      //see if this entry is from today
      if (checkEntryDateIsToday(lastEntry.date)) {
        setFirstEntryToday(false);
        setWeightInput(lastEntry.kilograms.toString());
      }
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <PageTitle text="How much do you weigh today?" />
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <WeightInput weight={weightInput} setWeight={setWeightInput} />
        </View>
        <View style={styles.saveContainer}>
          <CustomButton
            onPress={async () =>
              saveWeight(db, weightInput, nav, firstEntryToday, lastEntryTime)
            }
            width={100}
            text="Save"
          />
        </View>
      </View>
    </View>
  );
}

async function saveWeight(db, kilograms, nav, firstEntryToday, lastEntryTime) {
  if (firstEntryToday) {
    await db.runAsync(
      "INSERT INTO weight (time, date, kilograms) VALUES (?, ?, ?);",
      Date.now(),
      new Date(Date.now()).toISOString(),
      kilograms
    );
  } else {
    await db.runAsync(
      "UPDATE weight SET time = ?, date = ?, kilograms = ? WHERE time = ?;",
      Date.now(),
      new Date(Date.now()).toISOString(),
      kilograms,
      lastEntryTime
    );
  }
  // print table for debugging purposes
  console.log(await db.getAllAsync("SELECT * FROM weight"));
  nav.goBack();
}

async function loadWeight(db) {
  const weightData = await db.getAllAsync("SELECT * FROM weight");
  const lastEntry = weightData[weightData.length - 1];
  console.log(lastEntry);
  return lastEntry;
}

const checkEntryDateIsToday = (date) =>
  date.slice(0, 10) == new Date(Date.now()).toISOString().slice(0, 10);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    margin: 10,
  },
  titleContainer: {
    flex: 1,
  },
  body: {
    flex: 4,
  },
  inputContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  saveContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
