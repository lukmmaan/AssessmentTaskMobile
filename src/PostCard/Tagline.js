import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  tagline: {},
});

export default ({ children, style, accent, bold, size }) => {
  let fontSize;

  switch (size) {
    case "lg":
      fontSize = 15;
      break;
    case "md":
      fontSize = 13;
      break;
    case "sm":
      fontSize = 11;
      break;
    default:
      fontSize = 13;
      break;
  }

  return (
    <Text
      style={{
        ...styles.tagline,
        color: accent ? "#F54B64" : "#FFFFFF",
        // fontFamily: bold ? "AvenirNextLTPro-Bold" : "AvenirNextLTPro-Regular",
        fontSize,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
