import React from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, Image, Button, Alert} from 'react-native'
import InscriptionInputComponent from '../Components/InscriptionInputComponent';

const Inscription = ({navigation}) => {

    return (
        <View style={styles.main_view}>
            <View style={styles.container}>
                <Text style={styles.hello}>Welcome !</Text>
                { 
                    // Importez InscriptionInputComponent et donnez lui la propriété navigation avec comme valeur navigation
                    // 1 ligne
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hello: {
        alignSelf: 'center',
        fontSize: 45,
        fontWeight: '400',
    },
    container: {
        width: '90%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})

export default Inscription