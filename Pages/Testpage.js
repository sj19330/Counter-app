import { StyleSheet, Text, View } from "react-native";
import PageTitle from "../Components/PageTitle";

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
