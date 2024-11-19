import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

type RootStackParamList = {
    Home: undefined;
    TabUserNavigation: undefined;
};

// Tipado correcto para la navegación
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();  // Usando StackNavigationProp


    function navegar(){
        navigation.navigate('TabUserNavigation');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button icon="camera" mode="contained" onPress={() => navegar()}>
                Press me
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24 },
});

export default HomeScreen;
