import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Day16 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //   GETTING DATA FROM FETCH REQUEST

  const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let post = await response.json();

    setData(post);
    setLoading(false);
  };

  //   RENDER DATA ON LOADING THE APP

  useEffect(() => {
    getData();
  }, []);

  // LOADING STATE IF DATA IS ON LOADING

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingBox}>
        <View>
          <ActivityIndicator size={"large"} color={"#FF6C22"} />
          <Text style={{ textAlign: "center" }}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  //ELSE RENDER THE FLATlIST

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

          // SEPARATE THE CARD WITH THE HEIGHT OF 16PX

          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}

          //IF API IS NOT RESPONDING THE SHOW THE LIST EMPTY COMPONENT

          ListEmptyComponent={
            <Text
              style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}
            >
              No Data Found
            </Text>
          }

          // GIVE HEADING TO THE LIST OF CARD

          ListHeaderComponent={
            <Text
              style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}
            >
              List Start From Here
            </Text>
          }
          
          // GIVE FOOTER TO THE LIST OF CARD

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
  loadingBox: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: StatusBar.currentHeight,
  },
});
