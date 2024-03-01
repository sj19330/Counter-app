import { StyleSheet, Text, View } from "react-native";

export default function Progress() {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Progress</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.tbc}>TBC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    paddingTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
  body: {
    flex: 3,
    alignItems: "center",
  },
  tbc: { textAlign: "center", fontSize: 20, paddingTop: 40 },
});
