import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DBContext } from "../DbContext";

export default function TestPage() {
  const db = useContext(DBContext);

  return (
    <View>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
