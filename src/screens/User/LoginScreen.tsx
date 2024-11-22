import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ToastAndroid } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { TextInput } from 'react-native-paper';
import * as LocalAuthentication from 'expo-local-authentication';
const LoginScreen = () => {
    const { login } = useAuth();
    const [txtUsuario, setTxtUsuario] = React.useState("");
    const [txtPassword, setTxtPassword] = React.useState("");

    useEffect(() => {
        handleBiometricAuth();
    }, []);


    async function cargaInicial(){
        const res1 = await handleBiometricAuth();

    }

    const handleBiometricAuth = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        if (!compatible) {
            ToastAndroid.showWithGravity(
                "Tu dispositivo no soporta autenticación biométrica.",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );

            return;
        }
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        if (!enrolled) {
            ToastAndroid.showWithGravity(
                "No hay huellas digitales registradas en este dispositivo.",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );

            return;
        }
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Confirma tu identidad',
            fallbackLabel: 'Usar contraseña',
        });

        if (result.success) {
            ToastAndroid.showWithGravity(
                "Autenticación exitosa', '¡Bienvenido!",
                ToastAndroid.LONG,
                ToastAndroid.CENTER,

            );
            return true;
        } else {
            ToastAndroid.showWithGravity(
                "La autenticación falló o fue cancelada.",
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            );
            return false;
        }
        
    };




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                label="Usuario"
                value={txtUsuario}
                onChangeText={text => setTxtUsuario(text)}
                right={<TextInput.Icon icon="account" />}
            />
            <TextInput
                style={styles.input}
                label="Conotraseña"
                secureTextEntry
                value={txtPassword}
                onChangeText={text => setTxtPassword(text)}
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
