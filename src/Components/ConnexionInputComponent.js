import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import LoginButton from './CustomButtons'

const ConnexionInputComponent = (props) => {

    {/*
        Maintenant que vous êtes un peu plus familier avec ca, créez deux constantes useState de la même maniere que pour le component Inscription
        1ère constante = username
        2ème constante = password
    */}

    const CheckRegister = () => {
        if (username != props.username || password != props.password) {
            Alert.alert(
                "Error",
                "Incorrect login",
                { text: "OK", onPress: () => console.log("OK Pressed") }
            );
        }
        else {
            props.navigation.replace('Home', {
                username: username
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logins_container}>
                <Text style={styles.login}>Username</Text>
                {/*
                    A vous de jouer pour le TextInput username
                */}
            </View>
            <View style={styles.logins_container}>
                <Text style={styles.login}>Password</Text>
                {/*
                    A vous de jouer pour le TextInput password
                */}
            </View>
            {
                // LoginButton avec les mêmes propriétés que pour le componenet Inscription mais la fonction dans le onPress sera CheckRegister()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    logins_container: {
        width: '100%',
        height: '24%',
    },
    logins__input: {
        height: '75%',
        marginTop: '2%',
        paddingLeft: '5%',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#FFA622',
        borderBottomColor: '#FF7300',
        borderBottomWidth: 3,
        backgroundColor: '#FFA622',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
    },
})

export default ConnexionInputComponent