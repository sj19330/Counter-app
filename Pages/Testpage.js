import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DBProvider } from "../DbProvider";

export default function TestPage() {
  const db = useContext(DBProvider);

  return (
    <View>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
