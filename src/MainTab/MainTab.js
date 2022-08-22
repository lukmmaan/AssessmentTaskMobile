import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "../HomeStack/HomeStack"
import ProfileScreen from "../ProfileScreen/ProfileScreen"
import Colors from "../components/Colors"
import UpdateScreen from "../UpdateScreen/UpdateScreen"
import Icon from "react-native-vector-icons"
import DeleteScreen from "../DeleteScreen/DeleteScreen";
import Update2Screen from "../Update2Screen/Update2Screen";
const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.primaryColor,
            style: {
                backgroundColor: "#20242F",
                borderTopWidth: 0,
                paddingTop: 4,
                alignSelf: "center",
                borderRadius: 18,
                position: "absolute",
                bottom: 20,
                left: 30,
                right: 30,
                alignItems: "center"
            }
        }}>
            <Tab.Screen
                name="Homey"
                component={HomeStack}
            />
            <Tab.Screen
                name="Delete"
                component={DeleteScreen}
            />
            <Tab.Screen
                name="Insert"
                component={UpdateScreen}
            />
            <Tab.Screen
                name="Update"
                component={Update2Screen}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}