import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { TextInput } from 'react-native-paper'
export default function App() {
    const [repos, setRepos] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [photo, setPhoto] = useState("");
    const [tempEdit, setTempEdit] = useState(0);
    const [tempId, setTempId] = useState("")
    const getData = (() => {
        Axios.get(`https://simple-contact-crud.herokuapp.com/contact`)
            .then((response) => {
                let data = [];
                //console.log(response.data);
                response.data.data.map((repo) => {
                    let rep = {
                        id: repo?.id,
                        firstName: repo?.firstName,
                        lastName: repo?.lastName,
                        age: repo?.age.toString(),
                        photo: repo?.photo,
                    };
                    console.log(rep.age + "reeppppp")
                    data.push(rep);
                });
                // console.log(data)
                // console.log(data);
                setRepos(data);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    })
    const [error, setError] = useState(null);
    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        console.log(repos);
    }, [repos]);

    const selectedItem = (item) => {
        console.log(item)
        setTempEdit(1)
        console.log(item.firstName + " umur " + item.age + item.lastName)
        setAge(item.age)
        setTempId(item.id)
        setFirstName(item.firstName)
        setLastName(item.lastName)
        setPhoto(item.photo)
    }
    const submit = () => {
        console.log(firstName + lastName + age + photo)
        Axios.put("https://simple-contact-crud.herokuapp.com/contact/" + tempId, {
            firstName: firstName.replace(/\s/g, ''),
            lastName: lastName.replace(/\s/g, ''),
            age: age.replace(/\s/g, ''),
            photo: photo.replace(/\s/g, '')
        })
            .then((res) => {
                console.log(res.data)
                setFirstName("")
                setLastName("")
                setAge("")
                setPhoto("")
                alert("Data saved")
                setTempEdit(0)
                getData()
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={stylesButton.appButtonContainer}>
            <Text style={stylesButton.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            {tempEdit == 0 ?
                <View style={styles.container}>
                    <FlatList
                        data={repos}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => selectedItem(item)}
                            >
                                <View style={styles.list}>
                                    <Text> {item.firstName} {item.lastName} </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View> : <>
                    <View>
                        <TextInput label='First Name' placeholder="Nama Depan" value={firstName} onChangeText={(value) => setFirstName(value)}></TextInput>
                        <TextInput label='Last Name' placeholder="Nama Belakang" value={lastName} onChangeText={(value) => setLastName(value)}></TextInput>
                        <TextInput label='Age' placeholder="Age" value={age} onChangeText={(value) => setAge(value)}></TextInput>
                        <TextInput label='Url Photo' placeholder="Url Photo" value={photo} onChangeText={(value) => setPhoto(value)}></TextInput>
                        <AppButton onPress={submit} title="Submit here! " size="sm" backgroundColor="#007bff" />
                    </View>
                    <View style={styles.container}>
                        <FlatList
                            data={repos}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => selectedItem(item)}
                                >
                                    <View style={styles.list}>
                                        <Text> {item.firstName} {item.lastName} </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21,21,21,0.1)',
    },
    list: {
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 5,
    },
});
const stylesButton = StyleSheet.create({
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