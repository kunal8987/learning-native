import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const TodoContain = ({handleClick}) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setText(val)}
        placeholder="Enter Todo..."
      />

      <Button
        title="Add Todo"
        onPress={() => handleClick(text)}
        color={"#750E21"}
      />
    </View>
  );
};

export default TodoContain;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#776B5D",
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  inputArea: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
