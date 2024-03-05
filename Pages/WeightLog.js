import { StyleSheet, Text, View } from "react-native";
import PageTitle from "../Components/PageTitle";

import { TextInput } from "react-native-gesture-handler";
import WeightInput from "../Components/WeightInput";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function WeightLog() {
  const nav = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <PageTitle text="How much do you weigh today?" />
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <WeightInput />
        </View>
        <View style={styles.saveContainer}>
          <CustomButton onPress={() => nav.navigate("Home")} />
        </View>
      </View>
    </View>
  );
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
