import { StyleSheet, Text, View, Pressable } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to Counter</Text>
      </View>
      <View style={styles.body}>
        <Pressable style={styles.buttons}>
          <Text style={styles.buttonText}>Track Food</Text>
        </Pressable>
        <Pressable style={styles.buttons}>
          <Text style={styles.buttonText}>Log Weight</Text>
        </Pressable>
        <Pressable style={styles.buttons}>
          <Text style={styles.buttonText}>View Progress</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f7f5fb",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 150,
    // borderWidth: 1,
    // borderColor: "red",
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
    // borderWidth: 1,
    // borderColor: "red",
    paddingVertical: 120,
  },
  buttons: {
    backgroundColor: "#7765e3",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    width: "60%",
    shadowColor: "#2F323A",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: "#f7f5fb",
    fontSize: 20,
  },
});
