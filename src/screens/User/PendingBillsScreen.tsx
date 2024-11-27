import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Dimensions } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from 'react-native-reanimated';
import type { DerivedValue } from 'react-native-reanimated';
import InfoFacturaComponent from './components/InfoFacturaComponent';
import { DetallePagosFaeModel, PagoModel, PagosCliModel } from '../../models/DetallePagoModel';
import { dataFacturas } from './components/temp';

const widthWindow = Dimensions.get('window').width;
export default function PendingBillsScreen() {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  // highlight-start
  const offset = useScrollViewOffset(animatedRef);
  const text = useDerivedValue(
    () => `Scroll offset: ${offset.value.toFixed(1)}`
  );
  // highlight-end
  const [dataPri, setDataPri] = useState<PagosCliModel[]>([]);
  const [detallePagos, setDetallePagos] = useState<DetallePagosFaeModel[]>([]);

  useEffect(() => {
    cargaInicial();
  }, []);

  function cargaInicial() {
    setDataPri(dataFacturas);
    const pagos = groupByFactura(dataFacturas);;
    setDetallePagos(pagos);
  }

  function groupByFactura(data: PagosCliModel[]): DetallePagosFaeModel[] {
    const grouped = data.reduce((acc, pago) => {
      const { ddo_doctran } = pago;
      // Si no existe la factura en el acumulador, la inicializamos
      if (!acc[ddo_doctran]) {
        acc[ddo_doctran] = {
          ent_identificacion: pago.ent_identificacion,
          cliente: pago.cliente,
          ddo_doctran: ddo_doctran,
          ddo_fecha_emision: pago.ddo_fecha_emision,
          totalApagar: 0,
          totalPagado: 0,
          pagos: [],
        };
      }
      // Agregamos el pago actual a la lista de pagos
      acc[ddo_doctran].pagos.push({
        dias_diferencia_cuotayrec: pago.dias_diferencia_cuotayrec,
        ddo_num_pago: pago.ddo_num_pago,
        ddo_monto: pago.ddo_monto,
        valor: pago.valor,
        monto_cancelado: pago.monto_cancelado,
        ddo_fechaven: pago.ddo_fechaven,
        tipo_vencido: pago.tipo_vencido,
        dias_atraso: pago.dias_atraso,
        fecha_vencimiento: pago.fecha_vencimiento,
        interes: pago.interes,
      });
      // Actualizamos los totales
      acc[ddo_doctran].totalApagar += pago.valor;
      acc[ddo_doctran].totalPagado += pago.monto_cancelado;
      return acc;
    }, {} as Record<string, DetallePagosFaeModel>);

    // Convertimos el objeto agrupado en un array
    return Object.values(grouped);
  }


  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        ref={animatedRef}
        horizontal={true}>

        {!detallePagos ?
          <Text>Cargando...</Text>
          :
          detallePagos.map((_, i) => (
            <View key={i} style={styles.box}>
              <InfoFacturaComponent />
            </View>
          ))
        }


      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: '88%',

  },
  scroll: {
    height: 250,
    marginTop: 5,
    marginBottom: 5,
  },
  scrollContent: {
    alignItems: 'center',
  },
  box: {
    minWidth: widthWindow - 12,
    minHeight: '100%',
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  },
});


