import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
export default function Day3() {
  const [name, setName] = useState("Rahul");
  return (
    <>
      {/* TEXT INPUT  */}

      <View style={styles.box}>
        <Text>Hi! I am {name}</Text>
        <TextInput
          //  properties:-
          //    multiline
          //    keyboardType= "numeric"
          placeholder="Enter Your Name"
          style={styles.inputText}
          onChangeText={(val) => setName(val)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    borderWidth: 1,
    padding: 8,
    margin: 15,
    borderColor: "black",
  },
});
