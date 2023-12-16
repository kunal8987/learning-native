import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const logo = require("../assets/adaptive-icon.png");
const Day8 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={()=> console.log('image press')}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={()=> console.log('text press')}>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          illum culpa inventore hic enim a dolore amet, tempore porro facere,
          labore omnis quia ducimus veritatis.
        </Text>
      </Pressable>
    </View>
  );
};

export default Day8;
