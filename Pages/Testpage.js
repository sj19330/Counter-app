import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { DBProvider } from "../DbProvider";

export default function TestPage() {
  const db = useContext(DBProvider);
  const [content, setContent] = useState(null);

  useEffect(() => {
    getContent(db).then((content) => setContent(content));
    addToDb(db);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{typeof content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

async function getContent(db) {
  const content = await db.getAllAsync("SELECT * FROM foodLog");
  return content[content.length - 1].breakfast;
}
