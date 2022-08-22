import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"
const { height } = Dimensions.get("screen");

export default ({ navigation }) => {
    const styles = StyleSheet.create({
        welcomeText: {
            //   fontFamily: "AvenirNextLTPro-Heavy",
            fontSize: 30,
            height: 34,
            color: "orange",
        },
        contentContainer: {
            marginTop: height * (314 / 812),
            alignItems: "center",
            marginHorizontal: 25,
        }, loginText: {
            marginTop: 30,
            height: 30,
            fontSize: 30,
            color: "red"
        }
    })
    const dispatch = useDispatch()
    const userSelector = useSelector((state) => state.user);
    const logoutHandler = () => {
        AsyncStorage.removeItem("userData")
            .then((result) => {
                dispatch({
                    type: "USER_LOGOUT"
                })
                console.log("LOGOUT !")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ ...styles.contentContainer }}>
                    <Text style={{ ...styles.welcomeText }}>Hi, {userSelector.username}</Text>
                    <Button onPress={logoutHandler}>Logout</Button>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}