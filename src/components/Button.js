import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../components/Colors"

const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      lineHeight: 20,
      color: "white",
      textAlign: "center",
    },
    btnContainer: {
      borderRadius: 22,
      width: "100%",
    },
    primary: {
      backgroundColor: Colors.primaryColor,
    },
    secondary: {
      backgroundColor: "white",
    },
    lg: {
      paddingVertical: 12,
    },
    md: {
      paddingVertical: 9,
    },
    sm: {
      paddingVertical: 5,
    },
  });
  
  export default ({
    children,
    textStyle,
    containerStyle,
    size = "sm",
    type = "primary",
    fontSize,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          ...styles.btnContainer,
          ...styles[type],
          ...styles[size],
          ...containerStyle,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: type == "secondary" ? Colors.primaryColor : "white",
            fontSize,
            ...textStyle,
          }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  };