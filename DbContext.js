import { useState, useEffect, createContext } from "react";
import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";

export const DBContext = createContext(undefined);

export default function DataBaseContext({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    initialiseDatabase().then((db) => {
      setIsLoading(false);
      setDatabase(db);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>Loading data from database :) ...</Text>
      </View>
    );
  } else {
    return <DBContext.Provider value={database}>{children}</DBContext.Provider>;
  }
}

async function initialiseDatabase() {
  // open database?
  const db = await SQLite.openDatabaseAsync("data");
  // setup table for weight
  await db.execAsync(`
      CREATE TABLE IF NOT EXISTS weight (
        time INTEGER NOT NULL,
        kilograms REAL NOT NULL
      );
    `);
  // setup table for food log
  await db.execAsync(`
      CREATE TABLE IF NOT EXISTS foodLog (
        time INTEGER NOT NULL,
        breakfast INTEGER NOT NULL,
        lunch INTEGER NOT NULL, 
        dinner INTEGER NOT NULL,
        snacks INTEGER NOT NULL);
      `);
  // print schemas for debugging purposes
  console.log(
    await db.getAllAsync(
      "SELECT * FROM sqlite_schema WHERE type='table' ORDER BY name"
    )
  );
  return db;
}
