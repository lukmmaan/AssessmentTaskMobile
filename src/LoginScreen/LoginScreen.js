import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Dimensions
} from "react-native";
// import Colors
import Button from "../components/Button"
import TextUI from "../components/TextUI"
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage"
const { height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    contentContainer: {
        marginTop: height * (314/812),
        alignItems:"center",
        marginHorizontal:25,
    },
    welcomeText: {
        //   fontFamily: "AvenirNextLTPro-Heavy",
        fontSize: 30,
        height: 34,
        color:"orange"
    },
    loginText: {
        marginTop: 30,
        height:30,
        fontSize:30,
        color:"red"
    },
});

export default (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);

    const loginBtnHandler = () => {
        console.log(username)
        AsyncStorage.setItem(
            "userData",
            JSON.stringify({
                username,
            })
        )
            .then(() => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: { username },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
             <View style={{ ...styles.contentContainer }}>
                 <Text style={{...styles.welcomeText}}>Assessment Requirement</Text>
                 <TextInput style={{height:50,width:300}} onChangeText={(text) => setUsername(text)} placeholder="Input Username"></TextInput>
                 <Button onPress={loginBtnHandler} >LOGIN</Button>
             </View>
            </TouchableWithoutFeedback>
        </View>
    )
}