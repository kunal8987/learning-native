import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
const logo = require("../assets/adaptive-icon.png");
const Day7 = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>
    </SafeAreaView>
  );
};

export default Day7;
