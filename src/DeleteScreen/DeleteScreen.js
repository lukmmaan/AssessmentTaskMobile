import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Axios from 'axios';

export default function App() {
    const [repos, setRepos] = useState([]);
    const getData = (() => {
        Axios.get(`https://simple-contact-crud.herokuapp.com/contact`)
            .then((response) => {
                let data = [];
                //console.log(response.data);
                response.data.data.map((repo) => {
                    let rep = {
                        id: repo?.id,
                        name: repo?.firstName,
                        lastName: repo?.lastName,
                        url: repo?.photo,
                    };
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

    const deleteData = (id) => {
        console.log("delete id " + id + "https://simple-contact-crud.herokuapp.com/contact/" + id)
        Axios.delete("https://simple-contact-crud.herokuapp.com/contact/" + id)
            .then((res) => {
                console.log(res.message)
                alert(res.message)
                getData()
            })
            .catch((err) => {
                console.log(err)
                alert(err.message + "\n URI = "+ "https://simple-contact-crud.herokuapp.com/contact/" + id)
            })
    }
    return (
        <View style={styles.container}>

            <FlatList
                data={repos}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => deleteData(item.id)}
                    >
                        <View style={styles.list}>
                            <Text> {item.name} {item.lastName} </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
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