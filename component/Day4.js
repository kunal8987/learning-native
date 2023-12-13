import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function Day4() {
  const [name, setName] = useState([
    { name: "raj", key: 1 },
    { name: "rahul", key: 2 },
    { name: "nova", key: 3 },
    { name: "kumar", key: 4 },
    { name: "shanu", key: 5 },
    { name: "smit", key: 6 },
    { name: "popaye", key: 7 },
  ]);
  return (
    <>
      {/* LIST AND SCROLL VIEW  */}

      <View style={styles.box}>
        <ScrollView>
          {name.map((el) => {
            return (
              <View style={styles.inputText} key={el.key}>
                <Text>{el.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputText: {
    borderWidth: 1,
    padding: 20,
    margin: 20,
    borderColor: "black",
  },
});
