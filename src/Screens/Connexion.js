import React from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, Image, Button, Alert} from 'react-native'
import ConnexionInputComponent from '../Components/ConnexionInputComponent';

const Connexion = ({route, navigation}) => {

    return (
        {/*
            Utilisez le Screen Inscription pour réaliser le screen connexion qui est très similaire
            N'oubliez pas de mettre le ConnexionInputComponent a la bonne place et en lui donnant les propriétés
            username qui est égale à route.params.username, password qui est similaire au précedent et navigation

            6 lignes (n'oubliez pas les styles)
        */}
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
        justifyContent: 'center',
    }
})

export default Connexion