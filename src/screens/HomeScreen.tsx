import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type RootStackParamList = {
  Inicio: undefined; // Si no pasas parámetros, usa `undefined`
  PerimetroEntregas: undefined;
  Game: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  function navegar(ruta: keyof RootStackParamList) {
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
        onPress={() => navegar('PerimetroEntregas')}
      >
        <MaterialCommunityIcons name="truck-delivery" size={24} color="#ffffff" />
        <Text style={styles.text}>Validar sector entrega</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navegar('Game')}
      >
        <MaterialCommunityIcons name="truck-delivery" size={24} color="#ffffff" />
        <Text style={styles.text}>Reto AlmEspana</Text>
      </TouchableOpacity>
      <View style={styles.messageContainerOk}>
        <Text style={{ fontStyle: 'italic' }}>Versión 1.0.0</Text>
      </View>
    </View>
  );
}

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
