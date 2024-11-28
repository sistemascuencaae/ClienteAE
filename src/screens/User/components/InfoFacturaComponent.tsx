import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { DetallePagosFaeModel } from "../../../models/DetallePagoModel";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const widthWindow = Dimensions.get("window").width;

interface DataProps {
    factura: DetallePagosFaeModel; // Propiedad que recibirá el hijo
}

const InfoFacturaComponent: React.FC<DataProps> = ({ factura }) => {
    return (
        <View style={styles.container}>
            {/* Información de la factura */}
            <Text style={{ paddingRight: 15 }}>
                Factura número: <Text style={styles.bold}>{factura.ddo_doctran}</Text>
            </Text>
            <Text>
                Fecha emisión: <Text style={styles.bold}>{factura.ddo_fecha_emision}</Text>
            </Text>
            <Text>
                Total a pagar: <Text style={styles.bold}>${factura.totalApagar}</Text>
            </Text>
            <Text>
                Total pagado: <Text style={styles.bold}>${factura.totalPagado}</Text>
            </Text>

            <View style={styles.horizontalDivider} />
            <Text style={styles.sectionTitle}>Resumen</Text>

            {/* Encabezados de la tabla */}
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.cell, styles.headerText]}># Pago</Text>
                <Text style={[styles.cell, styles.headerText]}>Estado</Text>
                <Text style={[styles.cell, styles.headerText]}>Cancelado</Text>
                <Text style={[styles.cell, styles.headerText]}>Monto</Text>
                <Text style={[styles.cell, styles.headerText]}>Saldo</Text>
                <Text style={[styles.cell, styles.headerText]}>F. Venci.</Text>
            </View>

            {/* Contenido de la tabla */}
            <FlatList
                data={factura.pagos}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.cell}>{item.ddo_num_pago}</Text>
                        <TipoVencido tipoVencido={item.tipo_vencido} fechaVen={item.ddo_fechaven}/>
                        <Text style={styles.cell}>${item.monto_cancelado ? item.monto_cancelado : 0}</Text>
                        <Text style={styles.cell}>{item.ddo_monto}</Text>
                        <Text style={styles.cell}>{item.saldo}</Text>
                        <Text style={styles.cell}>{item.ddo_fechaven}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />

            <View style={styles.horizontalDivider} />
            {/* Barra de progreso */}
            <ProgressBar progress={1} color={"red"} />

            <View style={styles.row}>
                <Text>Otro contenido...</Text>
            </View>
        </View>
    );
};

interface DataPropsTV {
    tipoVencido: string; // Propiedad que recibirá el hijo
    fechaVen: string; //
}
//: React.FC<DataProps> = ({ factura }) =>
const TipoVencido: React.FC<DataPropsTV> = ({ tipoVencido, fechaVen }) => {


    function calcularDiferenciaDias(fecha1: Date): number {
        const fecha2 = new Date(); // Fecha actual

        // Convertir ambas fechas a milisegundos
        const tiempo1 = fecha1.getTime();
        const tiempo2 = fecha2.getTime();

        // Calcular la diferencia en milisegundos
        const diferenciaMilisegundos = tiempo2 - tiempo1;

        // Convertir de milisegundos a días (1 día = 86400000 ms)
        const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

        return diferenciaDias;
    }

    const diasDiferencia = calcularDiferenciaDias(new Date(fechaVen));


    if(tipoVencido === "VENCIDO"){
        return(<Text style={styles.cellTipoVen}>
            <MaterialCommunityIcons name="alert-circle-outline" size={12} color="red" />
            {tipoVencido}
        </Text>);
    }

    if (tipoVencido === "POR VENCER" && diasDiferencia >= -5) {
        return (<Text style={styles.cellTipoPorV}>
            <MaterialCommunityIcons name="bell-ring-outline" size={12} color="yellow" />
             {tipoVencido}
        </Text>);
    }
    //check-circle-outline

    if (tipoVencido === "CANCELADO") {
        return (<Text style={styles.cellTipoCan}>
            <MaterialCommunityIcons name="check-circle-outline" size={12} color="green" />
            {tipoVencido}
        </Text>);
    }

    return(
        <Text style={styles.cell}>{tipoVencido}</Text>
    );
}

export default InfoFacturaComponent;

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: "98%",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    bold: {
        fontWeight: "bold",
    },
    containerFlat: {
        backgroundColor: "white",
        minHeight: "50%",
        maxHeight: "50%",
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 8,
    },
    header: {
        backgroundColor: "#e0e0e0",
        borderBottomWidth: 2,
        borderBottomColor: "#bbb",
    },
    cell: {
        flex: 1,
        textAlign: "center",
        maxWidth: 60,
        fontSize: 9,
        
    },
    cellTipoVen:{
        flex: 1,
        textAlign: "center",
        maxWidth: 60,
        fontSize: 9,
        color: 'red'
    },
    cellTipoPorV:{
        flex: 1,
        textAlign: "center",
        maxWidth: 60,
        fontSize: 8,
        color: '#ffff00'
    },
    cellTipoCan: {
        //flex: 1,
        textAlign: "left",
        maxWidth: 60,
        fontSize: 8,
        color: 'green'
    },
    headerText: {
        fontWeight: "bold",
    },
    horizontalDivider: {
        width: "98%",
        height: 1,
        backgroundColor: "#704747",
        marginVertical: 10,
    },
});

// import { Dimensions } from "react-native";
// import { FlatList, StyleSheet, Text, View } from "react-native";
// import { ProgressBar } from "react-native-paper";
// import { DetallePagosFaeModel } from "../../../models/DetallePagoModel";
// const widthWindow = Dimensions.get('window').width;
// interface DataProps {
//     factura: DetallePagosFaeModel; // Propiedad que recibirá el hijo
// }
// //export default function InfoFacturaComponent() {
// const InfoFacturaComponent: React.FC<DataProps> = ({factura}) => {
//     return (
//         <View style={styles.container}>
//                     <Text style={{ paddingRight: 15 }}>Factura número: <Text style={{ fontWeight: 'bold',}}>{factura.ddo_doctran}</Text></Text>
//                     <Text>Fecha emisión: <Text style={{ fontWeight: 'bold' }}>{factura.ddo_fecha_emision}</Text></Text>
        
//             <View style={styles.horizontalDivider} />
//             <Text>Resumen</Text>
//             <View style={styles.containerFlat}>
//                 <FlatList
//                     data={factura.pagos}
//                     renderItem={({ item }) => <Text>{item.tipo_vencido}</Text>}
//                     keyExtractor={item => item.key}
//                 />
//             </View>
//             <View style={styles.horizontalDivider} />
//                 <ProgressBar progress={1} color={'red'} />
//             <View style={styles.row}>
//                 <Text>HOla2</Text>
                
//             </View>
//         </View>
//     )
// }

// export default InfoFacturaComponent;


// const styles = StyleSheet.create({
//     container: {
//         width: '95%', height: '98%', 
//     },
//     containerFlat: {
//         backgroundColor: 'white',
//         minHeight: '50%',
//         maxHeight: '50%',
//     },
//     row: {
//         flexDirection: 'row',
//         maxWidth: widthWindow-150,
//     },
//     horizontalDivider: {
//         width: '98%',
//         height: 1,
//         backgroundColor: '#704747',
//         marginVertical: 10,
//     },
// });


