import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../LoginScreen/LoginScreen";
import MainTab from "../MainTab/MainTab"

const Stack = createBottomTabNavigator();

export default () => {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);

    useEffect(() => {
        console.log(userSelector.username)
        AsyncStorage.getItem("userData")
            .then((storageItem) => {
                if (!storageItem) throw "Item is empty";
                dispatch({
                    type: "USER_LOGIN",
                    payload: JSON.parse(storageItem),
                });
            })
            .catch((err) => {
                console.log(err);
            });
        // AsyncStorage.removeItem("userData");
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {(userSelector.username) ? (
                    <Stack.Screen
                        options={{ animationEnabled: false }}
                        name="MainTab"
                        component={MainTab} />

                ) : (
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                        />
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}