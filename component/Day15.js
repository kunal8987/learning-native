import React, { useState } from "react";
import { SafeAreaView, Switch, Text, View } from "react-native";

const Day15 = () => {
  const [type, setType] = useState(false);
  return (
    <SafeAreaView style={{ paddingTop: 20 }}>
      <Text>Toggle Switch</Text>
      <Switch
        value={type}
        onValueChange={() => setType((prev) => !prev)}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"gray"}
      />
    </SafeAreaView>
  );
};

export default Day15;
