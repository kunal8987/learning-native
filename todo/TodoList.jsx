import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoList = ({ item, handlePress }) => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={() => handlePress(item.key)}>
        <Text style={styles.list}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: "#776B5D",
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    borderRadius: 8,
  },
  listContainer: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
});
