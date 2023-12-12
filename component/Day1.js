import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Day1() {
    return (
      <>
        {/* VIEW TEXT STYLE DAY 1 */}
  
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textBold}>Learning React Native</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.textBold}>
              {/* TEXT INSIDE TEXT APPLY THE SAME STYLE PROPERTY  */}
              This Is The Body Of App <Text>React Native</Text>{" "}
            </Text>
            <Text>This Is The Body Of App </Text>
            <Text>This Is The Body Of App </Text>
            <Text>This Is The Body Of App </Text>
          </View>
        </View>
  
        
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      backgroundColor: "teal",
      padding: 15,
    },
    textBold: {
      fontSize: 16,
      color: "red",
      fontWeight: "bold",
    },
    body: {
      backgroundColor: "yellow",
      margin: 10,
      padding: 10,
    },
  });
  