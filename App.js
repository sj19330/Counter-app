import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./Pages/HomePage";
import TrackFood from "./Pages/TrackFood";
import Progress from "./Pages/Progress";
import WeightLog from "./Pages/WeightLog";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TestPage from "./Pages/Testpage";
import { useState, useEffect } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>Loading data from database...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Track Food" component={TrackFood} />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="Weight Log" component={WeightLog} />
          <Stack.Screen name="Test" component={TestPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
