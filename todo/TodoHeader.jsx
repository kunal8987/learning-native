import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TodoHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App </Text>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#FFC47E",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    color: "#750E21",
  },
});
