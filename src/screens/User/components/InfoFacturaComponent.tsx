import { Dimensions, StatusBar } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ModalPuntosPago from "./ModalPuntosPago";
import { MD3Colors, ProgressBar } from "react-native-paper";
type ItemProps = { title: string };
const widthWindow = Dimensions.get('window').width;

export default function InfoFacturaComponent() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            title: 'Third Item'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d77',
            title: 'Third 7',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d78',
            title: 'Third 8',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            title: 'Third 8',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d710',
            title: 'Third 8',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7111',
            title: 'Third 8',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7112',
            title: 'Third 12',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7113',
            title: 'Third 13',
        },
    ];
    

   

    return (
        <View style={styles.container}>
                    <Text style={{ paddingRight: 15 }}>Factura número: <Text style={{ fontWeight: 'bold',}}>FAE-1-501-5368</Text></Text>
                    <Text>Fecha emisión: <Text style={{ fontWeight: 'bold' }}>Factura</Text></Text>
            
                    <Text style={{ paddingRight: 15 }}>Cliente: <Text style={{ fontWeight: 'bold' }}>Tomas Felipe quichimbo Peralta</Text></Text>
                    <Text >Identificación: <Text style={{ fontWeight: 'bold' }}>0107199556</Text></Text>
        
            <View style={styles.horizontalDivider} />
            <Text>Resumen</Text>
            <View style={styles.containerFlat}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Text>Test{item.title}</Text>}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.horizontalDivider} />
                <ProgressBar progress={1} color={'red'} />
            <View style={styles.row}>
                <Text>HOla2</Text>
                
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        width: '95%', height: '98%', 
    },
    containerFlat: {
        backgroundColor: 'white',
        minHeight: '50%',
        maxHeight: '50%',
    },
    row: {
        flexDirection: 'row',
        maxWidth: widthWindow-150,
    },
    horizontalDivider: {
        width: '98%',
        height: 1,
        backgroundColor: '#704747',
        marginVertical: 10,
    },
});


