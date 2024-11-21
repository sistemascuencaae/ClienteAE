import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
type RootStackParamList = {
    Home: undefined;
    TabUserNavigation: undefined;
};

// Tipado correcto para la navegación
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();  // Usando StackNavigationProp


    function navegar(ruta: any){
        navigation.navigate(ruta);
    }


    return (
        <View style={styles.container}>
            {/* Contenedor para la sombra */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/icon.png')} // Ruta a tu logo
                    style={styles.logo}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navegar('TabUserNavigation')}
            >
                <MaterialCommunityIcons name="account" size={24} color="#ffffff" />
                <Text style={styles.text}>Mi esapacio</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navegar('Game')}
            >
                <MaterialCommunityIcons name="google-maps" size={24} color="#ffffff" />
                <Text style={styles.text}>Puntos de venta</Text>
            </TouchableOpacity>
            <View style={styles.messageContainerOk}>
                <Text style={{ fontStyle: 'italic' }}>Versión 1.0.0</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinea los elementos desde la parte superior
        paddingTop: 40, // Agrega espacio en la parte superior (puedes ajustar el valor)
        paddingHorizontal: 20, // Espaciado lateral para evitar que el contenido toque los bordes

    },
    // Contenedor para la imagen con sombra
    logoContainer: {
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3, // Opacidad de la sombra
        shadowRadius: 5, // Radio de difuminado de la sombra
        elevation: 10, // Sombra para Android
        marginBottom: 20, // Espacio entre el logo y el siguiente botón
    },
    logo: {
        width: 150,
        height: 150, // Ajusta el tamaño de la imagen
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15, // Espacio entre los botones
        width: '100%', // Hace que el botón ocupe todo el ancho disponible
        maxWidth: 350, // Limita el tamaño máximo del botón
        justifyContent: 'center',

    },
    messageContainerOk: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
    },
    messageText: {
        color: '#000000',
        fontSize: 16,
    },
    text: {
        marginLeft: 8,
        color: '#fff',
        fontSize: 16,

    },
});


export default HomeScreen;
