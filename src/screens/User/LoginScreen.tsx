import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { TextInput } from 'react-native-paper';

const LoginScreen = () => {
    const { login } = useAuth();
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                label="Usuario"
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="account" />}
            />
            <TextInput
                style={styles.input}
                label="Conotraseña"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />
            <View style={styles.buttonContainer}>
                <Button title="Iniciar sesión" onPress={login} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        paddingHorizontal: 20, // Espaciado lateral
        backgroundColor: '#f5f5f5', // Color de fondo opcional
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%', // Ocupa todo el ancho del contenedor
        marginBottom: 20,
        maxWidth: 450
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
        maxWidth: 450
    },
});

export default LoginScreen;
