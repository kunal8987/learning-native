import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Day16 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let post = await response.json();

    setData(post);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardBox}>
                <Text style={styles.title}>{`Title:- ${item.title}`}</Text>
                <Text style={styles.body}>{`Description:- ${item.body}`}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={
            <Text
              style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}
            >
              No Data Found
            </Text>
          }
          ListHeaderComponent={
            <Text
              style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}
            >
              List Start From Here
            </Text>
          }
          ListFooterComponent={
            <Text
              style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}
            >
              List End Here
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Day16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAE7F3",
    padding: StatusBar.currentHeight,
  },

  cardBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },

  title: {
    fontSize: 24,
    color: "#31304D",
  },
  body: {
    fontSize: 20,
    color: "#BB9CC0",
  },
});
