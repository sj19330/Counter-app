import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import CustomButton from "../Components/CustomButton";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

export default function HomePage() {
  const developerMode = true;
  const nav = useNavigation();
  // const db = SQLite.openDatabase("data");

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to Counter</Text>
      </View>
      <View style={styles.body}>
        <CustomButton
          width="60%"
          text="Track Food"
          onPress={() => nav.navigate("Track Food")}
        />
        <CustomButton
          width="60%"
          text="Log Weight"
          onPress={() => nav.navigate("Weight Log")}
        />
        <CustomButton
          width="60%"
          text="View Progress"
          onPress={() => nav.navigate("Progress")}
        />
        {developerMode && (
          <CustomButton width="60%" text="Test Page" onPress={() => {}} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 150,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2F323A",
  },
  body: {
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingVertical: 120,
  },
});
