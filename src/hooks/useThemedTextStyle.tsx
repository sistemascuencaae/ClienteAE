import { useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';

/**
 * Hook para generar estilos de texto basados en el esquema de color actual.
 * Cambia entre "dark" y "light" automáticamente.
 */
const useThemedTextStyle = () => {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        light: {
            color: '#000', // Negro para texto claro
        },
        dark: {
            color: '#FFF', // Blanco para texto oscuro
        },
    });

    return colorScheme === 'dark' ? styles.dark : styles.light;
};

export default useThemedTextStyle;
