// import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
const Day13 = () => {
  // COMMENT CODE IS THE DIFFERENT METHOD OF RESPONSIVE DESIGN MODEL
  //   const [dimension, setDimension] = useState({
  //     window: Dimensions.get("window"),
  //   });
  //   useEffect(() => {
  //     const responsive = Dimensions.addEventListener("change", ({ window }) => {
  //       setDimension({ window });
  //     });
  //     return () => responsive?.remove();
  //   });

  //   const { window } = dimension;
  //   const windowWidth = window.width;
  //   const windowHeight = window.height;


  
  //   THIS IS THE SIMPLEST METHOD OF RESPONSIVE DESIGN
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.box}>
      <View
        style={[
          styles.inner,
          {
            height: windowHeight > 600 ? "60%" : "90%",
            width: windowWidth > 500 ? "70%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 25 }}>
          Dynamic Ui
        </Text>
      </View>
    </View>
  );
};

export default Day13;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
