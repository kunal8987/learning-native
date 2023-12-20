import React from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
const Day12 = () => {
  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <Text style={styles.text}>Dynamic Ui</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Day12;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "green",
    height: windowHeight > 600 ? "60%" : "90%",
    width: windowWidth > 500 ? "70%" : "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 25,
    color: "white",
  },
});
