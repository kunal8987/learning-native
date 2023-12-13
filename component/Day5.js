import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
export default function Day5() {
  const [name, setName] = useState([
    { name: "raj", id: 1 },
    { name: "rahul", id: 2 },
    { name: "nova", id: 3 },
    { name: "kumar", id: 4 },
    { name: "shanu", id: 5 },
    { name: "smit", id: 6 },
    { name: "popaye", id: 7 },
  ]);
  return (
    <>
      {/* FLAT LIST COMPONENT  */}

      {/* FLAT ITEM IS A INBUILT TAG IN REACT NATIVE WITH THE SELF CLOSING  */}
      <FlatList
        //  CONVERT OUTPUT INTO COLUM FORMAT
        numColumns={2}
        //   KEY EXTRACTOR FOR UNIQUE KEY FOR EACH ITEM IN AN ARRAY
        keyExtractor={(item) => item.id}
        // DATA THE NAME OF THE ARRAY OR ARRAY OF OBJECT
        data={name}
        // RENDER ITEM IS A FUNCTION WHICH RETURN THE DATA
        renderItem={({ item }) => (
          <Text style={styles.inputText}>{item.name}</Text>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputText: {
    borderWidth: 1,
    padding: 20,
    margin: 20,
    borderColor: "black",
    fontSize: 20,
    backgroundColor: "pink",
  },
});
