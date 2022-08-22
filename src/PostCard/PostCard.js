import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

import TextUI from "../components/TextUI"
import Colors from "../components/Colors"
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    likeBtn: {
        fontSize: 22,
        color: "white",
    },
});

export default ({ navigation, data }) => {
    return (
        <View
            style={{
                backgroundColor: Colors.backgroundColor,
                width: width - 30,
                marginHorizontal: 15,
                borderRadius: 6,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8,
                elevation: 6,
                marginVertical: 10,
                // marginTop:30
            }}
        >
            <Image
            
                source={{
                    uri: data.photo,
                }}
                style={{
                    padding: 40,
                    width: width - 30,
                    height: width - 30,
                }}
            />
            <View style={{ paddingHorizontal: 13 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 11,
                    }}
                >
                </View>
                <TextUI style={{ marginTop: 11, height: null }} bold>
                    Fisrt Name: {data.firstName}
                </TextUI>
                <TextUI size="sm" style={{ marginTop: 11, height: null }}>
                    Last Name : {data.lastName}
                </TextUI>
                <TextUI size="sm" style={{ marginTop: 11, height: null }}>
                    Age : {data.age}
                </TextUI>
            </View>
        </View>
    );
};