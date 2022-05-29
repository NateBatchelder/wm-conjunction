import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 4,
    borderColor: "#efefef",
    borderStyle: "solid",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 8
  }
});

export default Card;
export { Card as MDBCard };
