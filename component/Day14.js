import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
const Day14 = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.box}>
        <Text style={styles.buttonContainer}>Hi! I am John</Text>
      </View>
    </SafeAreaView>
  );
};

export default Day14;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  box: {
    flex: 1,
    backgroundColor: "plum",
  },

  //   fontSize:Platform.os === "android" ? 28 : 0 inline size for small app
  buttonContainer: {
    ...Platform.select({
      ios: {
        fontSize: 25,
        textAlign: "center",
      },
      android: {
        fontSize: 28,
        textAlign: "center",
        paddingTop: 20,
        color: "yellow",
      },
    }),
    marginTop: 10,
  },
});
