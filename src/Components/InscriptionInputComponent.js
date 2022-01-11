import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import LoginButton from './CustomButtons'

const InscriptionInputComponent = ({navigation}) => {

    {/* 
        Créez trois constantes de cette forme la [valeur, setValeur] = useState('')
        1ère constante = username
        2ème constante = password
        3ème constante = repeatPassword
    */}

    const checkAndRedirect = () => {
        if (password != repeatPassword) {
            Alert.alert(
                "Error",
                "Passwords mismatched",
                { text: "OK", onPress: () => console.log("OK Pressed") }
            );
        }
        else {
            navigation.replace('Connexion', {
                username: username,
                password: password
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logins_container}>
                <Text style={styles.login}>Username</Text>
                {/* 
                    Créez un TextInput ayant comme style logins_input, une propriété onChangeText={() => setUsername(value)} et une value={username}
                */}
            </View>
            <View style={styles.logins_container}>
                <Text style={styles.login}>Password</Text>
                {/* 
                    Créez un TextInput ayant comme style logins_input, une propriété onChangeText pour le password, une value password et une secureTextEntry={true}
                */}
            </View>
            <View style={styles.logins_container}>
                <Text style={styles.login}>Repeat password</Text>
                {/*
                    A vous de jouer pour le dernier TextInput
                */}
            </View>
            {
                // Creer un LoginButton et donnez lui en propriété text, color et onPress qui sera égale à checkAndRedirect()
                // Hint: on créer un component importé comme cela -> <VotreComponent propriété1='...' .../> & attention a la propriété onPress elle s'executera automatiquement en premier si vous oubliez quelque chose
                // 1 ligne
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logins_container: {
        width: '100%',
        height: '24%',
    },
    logins__input: {
        height: '50%',
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

export default InscriptionInputComponent