import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import TodoHeader from "./TodoHeader";
import TodoContain from "./TodoContain";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([
    { text: "hello", key: 1 },
    { text: "morning", key: 2 },
  ]);

  const handleClick = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random() }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS!", "Todo Must Have A More Than 3 Characters!", [
        { text: "understood", onPress: () => console.log("Alert Cleared") },
      ]);
    }
  };
  const handlePress = (key) => {
    setTodo((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <TodoHeader />
        <View style={styles.header}>
          {/* input box */}
          <TodoContain handleClick={handleClick} />
          <View style={styles.list}>
            {/* list */}
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoList item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
