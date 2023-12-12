import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Day2() {
  const [name, setName] = useState("Rahul");

  const handleName = () => {
    setName("Kartik");
  };
  return (
    <>
      {/* USING STATE  */}

      <View style={styles.box}>
        <Text>Hi! I am {name}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Change Name" onPress={handleName} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
