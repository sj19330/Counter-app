import { StyleSheet, Text, View } from "react-native";
import PageTitle from "../Components/PageTitle";

export default function WeightLog() {
  return (
    <View style={styles.page}>
      <PageTitle text="How much do you weigh today?" />
      <View style={styles.body}>
        <Text style={styles.tbc}>TBC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { flex: 4 },
  body: {
    flex: 3,
    alignItems: "center",
  },
  tbc: { textAlign: "center", fontSize: 20, paddingTop: 40 },
});
