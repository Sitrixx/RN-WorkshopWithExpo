import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, Image, Button, Alert, TouchableOpacity} from 'react-native'

const Flashcards = (props) => {

    {
        // Creer une constante useState(false) avec pour nom isBack et de la même forme que les autres
    }

    const content = (
        <View style={[styles.flashcards, {backgroundColor: props.color}]}>
            {/*
                Implémentez un check avec votre constante isBack en ternaire  (isBack ? ... : ...)
                Si isBack est true, alors display un text avec la props back sinon avec la props.front
            */}
        </View>
    )
    
    return <TouchableOpacity onPress={() => setIsBack(!isBack)} style={styles.container}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    test: {
        fontSize: 24,
        color: 'black',
    },
    flashcards_text: {
        fontSize: 40,
    },
    container: {
        width: '100%',
        marginBottom: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flashcards: {
        width: '98%',
        height: 250,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Flashcards;