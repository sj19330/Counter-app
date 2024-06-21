import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./Pages/HomePage";
import TrackFood from "./Pages/TrackFood";
import Progress from "./Pages/Progress";
import WeightLog from "./Pages/WeightLog";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TestPage from "./Pages/Testpage";
import { useState, useEffect, createContext } from "react";
import * as SQLite from "expo-sqlite";

const Stack = createStackNavigator();
export const DBContext = createContext(null);


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    initialiseDatabase().then(db => {
      setIsLoading(false);
      setDatabase(db);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>Loading data from database...</Text>
      </View>
    );
  } else {
    return (
      <DBContext.Provider value={database}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Track Food" component={TrackFood} />
            <Stack.Screen name="Progress" component={Progress} />
            <Stack.Screen name="Weight Log" component={WeightLog} />
            <Stack.Screen name="Test" component={TestPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </DBContext.Provider>
    );
  }
}

async function initialiseDatabase() {
  const db = await SQLite.openDatabaseAsync("data");
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS weight (
      time INTEGER NOT NULL,
      kilograms REAL NOT NULL
    );
  `);
  // print schemas for debugging purposes
  console.log(await db.getAllAsync("SELECT * FROM sqlite_schema WHERE type='table' ORDER BY name"));
  return db;
}