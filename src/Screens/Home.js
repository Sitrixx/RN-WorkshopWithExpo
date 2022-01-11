import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TextInput, Image, Modal, Alert, TouchableOpacity, Button} from 'react-native'
import Plus from '../../assets/plus_icon.png';
import Flashcards from '../Components/Flashcards'
import {colors} from '../Constants/colors'

const Home = (props) => {

    const [flashcardList, setFlashCardList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    const showModal = () => {
        // Mettez le modalVisible = true
    };

    const addFlashCard = () => {
        /* 
            Mettez le modalVisible = false
            Ajoutez une flashcard (component) dans votre tableau flashcardList avec une propriété key qui aura comme valeur la length du tableau 
            et je vous laisse chercher les autres dans le component flashcard 
            Si vous ne savez pas comment append un component dans le tableau, man google ;).
            PS: pour la propriété color, ecriver une fonction a l'interieur permettant de prendre une couleur au hasard dans notre tableau colors !
        */
    }

    return (
        <View style={styles.main_view}>
            <View style={styles.title_container}>
                <Text style={styles.hello}>{props.route.params.username}'s Home</Text>
            </View>
            <View style={styles.main_container}>
                <TouchableOpacity style={styles.add_deck} onPress={() => showModal()}>
                    <Image style={styles.plus} source={Plus}/>
                </TouchableOpacity>
                {/*
                    Créez un Modal avec trois propriétés: animationType, transparent et visible. Je vous laisse le soin de remplir ces propriétés.
                    Il y aura à l'interieur une View qui aura le style centered_view et qui contiendra une autre View et qui aura le style modal_view
                    Cette derniere contiendra deux TextInput avec pour style modal_input, une value et un onChangeText (les deux TextInput correspondent au front et au back de votre flashcard)
                    Elle contiendra, en dernier, un button avec une propriété onPress qui utilisera addFlashCard comme fonction et un title 
                */}
                {/*
                    Implémentez une flatlist qui prendra en style list, en data notre array flashcardList, un keyExtractor et un renderItem
                */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
    },
    hello: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: '400',
    },
    title_container: {
        width: '100%',
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    main_container: {
        width: '95%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    add_deck: {
        width: '100%',
        height: '20%',
        borderRadius: 10,
        borderWidth: 10,
        borderColor: '#494949',
        borderStyle: 'dotted',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plus: {
        width: '10%',
        height: '30%',
    },
    scroll: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    list: {
        marginTop: '10%',
    },
    centered_view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal_view: {
        width: '60%',
        height: '30%',
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        justifyContent: "space-evenly",

        alignItems: "center",
    },
    modal_input: {
        width: '80%',
        height: '18%',
        paddingLeft: '5%',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default Home