import { StyleSheet, Text, View } from "react-native";
import PageTitle from "../Components/PageTitle";

import { TextInput } from "react-native-gesture-handler";
import WeightInput from "../Components/WeightInput";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function WeightLog() {
  const nav = useNavigation();

  return (
    <View>
      <CustomButton onPress={() => nav.navigate("Home")}></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({});
