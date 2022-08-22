import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView,
    TouchableOpacity, Alert
} from "react-native";
import { useState } from 'react';
import { TextInput } from 'react-native-paper'
import Axios from 'axios';
import HomeStack from '../HomeStack/HomeStack';

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [photo, setPhoto] = useState("")
    const [age, setAge] = useState("")
    const submit = () => {
        console.log(typeof(age))
        const data = {
            firstName,
            lastName,
            age,
            photo
        }
        console.log(JSON.stringify(data, null /*replacer function */, 4 /* space */))
        Axios.post("https://simple-contact-crud.herokuapp.com/contact",
        {
            firstName: firstName.replace(/\s/g, ''),
            lastName: lastName.replace(/\s/g, ''),
            age     : age.replace(/\s/g, ''),
            photo   : photo.replace(/\s/g, '')
          }
        )
            .then((res) => {
                console.log(res.data)
                setFirstName("")
                setLastName("")
                setAge("")
                setPhoto("")
                alert("Data saved")
                return (<HomeStack/>)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
    return (
        <View>
            <TextInput label='First Name' placeholder="Nama Depan" value={firstName} onChangeText={(value) => setFirstName(value)}></TextInput>
            <TextInput label='Last Name' placeholder="Nama Belakang" value={lastName} onChangeText={(value) => setLastName(value)}></TextInput>
            <TextInput label='Age' placeholder="Umur" value={age} onChangeText={(value) => setAge(value)}></TextInput>
            <TextInput label='Url Photo' placeholder="Url Photo" value={photo} onChangeText={(value) => setPhoto(value)}></TextInput>
            <AppButton onPress={submit} title="Submit here!" size="sm" backgroundColor="#007bff" />
        </View>
    )
}