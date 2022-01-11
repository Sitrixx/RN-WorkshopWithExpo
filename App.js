import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inscription from './src/Screens/Inscription'
import Connexion from './src/Screens/Connexion'
import Home from './src/Screens/Home'

// Créez une constante Stack en assignant la fonction createNativeStackNavigator 

// 1 ligne

export default function App() {
    return (
        <NavigationContainer>
            {/*
                Utilisez votre constante pour creer un Navigator qui contiendra vos screens (<__.Navigator></__.Navigator> / <__.Screen/>)
                Le navigator aura comme propriétés initialRouteName qui sera égale a Inscription et une propriété screenOptions qui aura comme valeur headerShown: false
                Les screens devront contenir une propriété name qui sera égale au nom de votre écran et une propriété component qui sera l'import de l'écran (il y a 3 écrans)
                5 lignes 
            */}
      </NavigationContainer>
    );
}