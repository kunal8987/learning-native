import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";
const Day9 = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "red", paddingTop: 20 }}>
      <Button title="open modal" onPress={() => setOpen(true)} />
      <Modal
        visible={open}
        onRequestClose={() => setOpen(false)}
        animationType="slide"
        // presentationStyle="pageSheet" only work on iphone
        // animationType="fade"
      >
        <Text style={{ padding: 25 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ullam
          repellendus nobis provident corporis maiores tempore veritatis magnam
          tempora laborum.
        </Text>
        <Button title="close modal" onPress={() => setOpen(false)} />
      </Modal>
    </View>
  );
};

export default Day9;
