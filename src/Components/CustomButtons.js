import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const LoginButton = (props) => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress} style={styles.container}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        padding: '5%',
        width: '70%',
        borderRadius: 24,
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
    }
})

export default LoginButton