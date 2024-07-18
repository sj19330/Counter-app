import { StyleSheet, Text, View } from "react-native";
import PageTitle from "../Components/PageTitle";

import { TextInput } from "react-native-gesture-handler";
import WeightInput from "../Components/WeightPageComponents/WeightInput";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { DBProvider } from "../DbProvider";

export default function WeightLog() {
  const nav = useNavigation();
  const [weightInput, setWeightInput] = useState("0");
  const db = useContext(DBProvider);

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
            onPress={async () => saveWeight(db, weightInput, nav)}
            width={100}
            text="Save"
          />
        </View>
      </View>
    </View>
  );
}

async function saveWeight(db, kilograms, nav) {
  await db.runAsync(
    "INSERT INTO weight (time, kilograms) VALUES (?, ?);",
    Date.now(),
    kilograms
  );
  // print table for debugging purposes
  console.log(await db.getAllAsync("SELECT * FROM weight"));
  nav.goBack();
}

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
