import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
const logo = require("../assets/adaptive-icon.png");
const Day7 = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Image source={logo} style={{ width: 300, height: 300 }} /> */}

      <ImageBackground source={logo} style={{ flex: 1 }}>
        <Text style={{ margin: 25 }}>hello world </Text>
      </ImageBackground>
    </View>
  );
};

export default Day7;
