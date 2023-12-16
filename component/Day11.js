import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
const Day11 = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator />
      <ActivityIndicator color={"red"} />
      <ActivityIndicator color={"green"} size={"large"} />
      <ActivityIndicator
        color={"orange"}
        size={"large"}
        animating={false}
        //   to hide the activity indicator animating false it's true by default
      />
    </View>
  );
};

export default Day11;
