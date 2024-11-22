import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

const ITEM_COUNT = 9; // Número total de items

export default function InfoFacturaComponent() {
    const animatedRef = useAnimatedRef<Animated.ScrollView>();
    const items = Array.from(Array(ITEM_COUNT).keys());
    const [cuotas, setCuotas] = useState<number[]>([1,2,3,4]);
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={{ fontWeight: 'bold', width: '50%'}}>Factura número: <Text>FAE-1-501-5368</Text></Text>
                <Text style={{ fontWeight: 'bold', width: '50%' }}>Fecha emisión: <Text>Factura</Text></Text>
            </View>
            <View style={styles.boxPagos}>
                <View style={styles.boxWrapper}>
                    <Animated.ScrollView ref={animatedRef} style={{ backgroundColor: 'green', height: 50, width: 100 }}>
                        {cuotas.map((_, i) => (
                            <View key={i} style={{ width: '100%', height: 500, backgroundColor: '#ffffff' }}>
<Text>aaaaaaaaaaa</Text>
                            </View>
                        ))}
                    </Animated.ScrollView>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'red'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    box: {
        backgroundColor: '#696969',
        flex: 1,
        margin: 5,
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxPagos: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '70%',
    },
    boxWrapper: {
        backgroundColor: 'white',
        height: 150,
        minWidth: '100%',

    },
});








// <View style={styles.row}>
//     {items.slice(0, 3).map((item) => (
//         <Text >{item}</Text>
//     ))}
// </View>


// <View style={styles.row}>
//     {items.slice(3, 5).map((item) => (
//         <Text >{item}</Text>

//     ))}
// </View>


// <View style={styles.row}>
//     {items.slice(5, 9).map((item) => (
//         <Text >{item}</Text>

//     ))}
// </View>