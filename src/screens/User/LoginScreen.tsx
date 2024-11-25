import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ToastAndroid, TouchableOpacity, Modal, Alert, Pressable, SafeAreaView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { TextInput } from 'react-native-paper';
import * as LocalAuthentication from 'expo-local-authentication';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DangerButtonSt, styleButton } from '../../styles/Buttons';
const LoginScreen = () => {
    const { login } = useAuth();

    useEffect(() => {
        //handleBiometricAuth();
    }, []);


    async function cargaInicial() {

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
            login();
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




    function navegar(ruta: string) { }


    return (
        <View style={styles.row}>
            {/* <TouchableOpacity
                style={styles.button}
                onPress={() => navegar('TabUserNavigation')}
            >
                <MaterialCommunityIcons name="account" size={36} color="#000000" />
                <Text style={styles.text}>Usuario y contraseña</Text>
            </TouchableOpacity> */}
            <ModalLoginUserPas />
            <TouchableOpacity
                style={styleButton.transParentButton}
                onPress={() => handleBiometricAuth()}
            >
                <MaterialCommunityIcons name="fingerprint" size={42} color="#000000" />
                <Text style={styles.text}>Huella</Text>
            </TouchableOpacity>

        </View>

    );
};

const ModalLoginUserPas = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { login } = useAuth();
    const [txtUsuario, setTxtUsuario] = React.useState("");
    const [txtPassword, setTxtPassword] = React.useState("");


    return (
        
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }} >
                <View style={stylesModal.centeredView}>
                    <View style={stylesModal.containerLoginModal}>
                        <Text style={styles.title}>Login</Text>
                        <TextInput
                            style={stylesModal.input}
                            label="Usuario"
                            value={txtUsuario}
                            onChangeText={text => setTxtUsuario(text)}
                            right={<TextInput.Icon icon="account" />}
                        />
                        <TextInput
                            style={stylesModal.input}
                            label="Conotraseña"
                            secureTextEntry
                            value={txtPassword}
                            onChangeText={text => setTxtPassword(text)}
                            right={<TextInput.Icon icon="eye" />}
                        />
                            <Pressable style={styleButton.primaryButton} onPress={() => login()}>
                                <Text style={{color: 'white'}}>Iniciar Sesión</Text>
                            </Pressable>
                            <Pressable style={styleButton.dangerButton} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{color: 'white'}}>Cancelar</Text>
                            </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styleButton.transParentButton}
                onPress={() => setModalVisible(true)}
            >
                <MaterialCommunityIcons name="account" size={36} color="#000000" />
                <Text style={styles.text}>Usuario y contraseña</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}
const stylesModal = StyleSheet.create({
    input: {
        minWidth: 289,
        maxHeight: 70,
        marginBottom: 5,
        backgroundColor: 'white'
        //maxWidth: 44
    },
    containerLoginModal: {
        backgroundColor: '#e6e6e6',
        justifyContent: 'center', // Centra verticalmente
        minWidth: '80%',
        minHeight: '60%',
        alignItems: 'center', // Center
        paddingHorizontal: 20, // Espaciado lateral
        borderColor: '#cac8c8',
        borderWidth: 1,
        borderRadius: 10,
        borderTopWidth: 1,
        borderLeftWidth: 1, // Sin borde izquierdo
        borderBottomWidth: 4, // Solo el borde superior
        borderRightWidth: 4
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        paddingHorizontal: 20, // Espaciado lateral
        backgroundColor: '#f5f5f5', // Color de fondo opcional

    },
  
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
    buttonContainer: {
        width: '30%',
        //marginTop: 10,
        maxWidth: 450,
        //elevation: 10
    },
    text: {
        marginLeft: 8,
        color: '#000000',
        fontSize: 16,
        

    },
});

export default LoginScreen;
