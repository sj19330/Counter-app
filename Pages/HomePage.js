import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import CustomButton from "../Components/CustomButton";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

export default function HomePage() {
  const developerMode = true;
  const nav = useNavigation();
  const db = SQLite.openDatabase("data");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS slidersData(date DATE, breakfast INTEGER, lunch INTEGER, dinner INTEGER, snacks INTEGER, time TIME)",
        [],
        (sqlTxn, resultSet) => {
          console.log("table created successfully");
        },
        (error) => {
          console.log("error whilst creating dataset");
        }
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO slidersData(breakfast, lunch, dinner) VALUES (1,4,2)",
        [],
        (sqlTxn, resultSet) => {
          console.log("values added successfully");
        },
        (error) => {
          console.log("error whilst adding values 142");
        }
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS weightData(date DATE, weight FLOAT(24), time TIME)",
        [],
        (sqlTxn, resultSet) => {
          console.log("table created successfully");
        },
        (error) => {
          console.log("error whilst creating dataset");
        }
      );
    });
  }, []);

  const getData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM slidersData",
        [],
        (txobj, resultSet) => console.log(resultSet),
        (error) => {
          console.log("cannot fetch results set");
        }
      );
    });
  };

  if (isLoading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>Loading data from database...</Text>
      </View>
    );
  } else {
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
            <CustomButton
              width="60%"
              text="Test Page"
              onPress={() => {
                getData();
              }}
            />
          )}
        </View>
      </View>
    );
  }
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
