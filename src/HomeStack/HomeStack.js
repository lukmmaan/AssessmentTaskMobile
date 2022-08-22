import React from "react";
import Axios from 'axios'
import { useEffect, useState } from 'react';
import PostCard from "../PostCard/PostCard"
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
const { height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  contentContainer: {
      marginTop: height * (314 / 812),
      alignItems: "center",
      marginHorizontal: 25,
  },
  welcomeText: {
      //   fontFamily: "AvenirNextLTPro-Heavy",
      fontSize: 30,
      height: 34,
      color: "orange"
  },
  loginText: {
      marginTop: 30,
      height: 30,
      fontSize: 30,
      color: "red"
  },
  containerNavbar: {
      // marginHorizontal: 25,
      // marginTop: 30,
      height: 90,
      backgroundColor: "orange",
      // alignItems: "flex-end"
      // justifyContent:"space-around"
      // flex:1,
      display: "flex",
      flexDirection: "row"
  },
  textUsername: {
      marginTop: 60,
      paddingRight: 40,
      fontSize: 24,
      paddingHorizontal: 80
      // marginRight:00
  },
  iconCstm: {
      marginTop: 60,
      paddingRight: 40,
      fontSize: 24
  }

});

export default () => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
      console.log("masuk ke inquiry")
      Axios.get("https://simple-contact-crud.herokuapp.com/contact")
        .then((res) => {
          setPostList(res.data.data);
          //console.log(postList)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
  
    const renderPosts = ({ item }) => {
      return <PostCard data={item} />;
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ marginTop: 46 }}
                data={postList}
                renderItem={renderPosts}
                keyExtractor={(item) => item.id.toString()}
            />
            <StatusBar style="auto" />
        </View>
    )
}