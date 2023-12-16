import React from "react";
import { StatusBar, Text, View } from "react-native";
const Day10 = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={"teal"}
        barStyle={"light-content"}
        //   default, dark-content is use in barStyle

        // hidden property also available
      />

      <Text>status bar is up in teal color </Text>
    </View>
  );
};

export default Day10;
