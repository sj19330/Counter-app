import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./Pages/HomePage";
import TrackFood from "./Pages/TrackFood";
import Progress from "./Pages/Progress";
import WeightLog from "./Pages/WeightLog";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Track Food" component={TrackFood} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Weight Log" component={WeightLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
