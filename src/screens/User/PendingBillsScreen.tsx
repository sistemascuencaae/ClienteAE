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
    const pagos = groupByFactura(dataFacturas);
    const p = calcularDiferencia(pagos[1]);


    for (let index = 0; index < pagos.length; index++) {
      pagos[index].pagos = calcularDiferencia(pagos[index]);
      
    }
    setDetallePagos(pagos);

  }

  // Calcular la diferencia
 // const calcularDiferencia = (pagos: PagoModel[]) => {
  function calcularDiferencia(data: DetallePagosFaeModel): (PagoModel & { saldo: number })[] {
    const pagosConDiferencia = data.pagos.map((pago, index, array) => {
      // Filtrar los pagos dentro del mismo `ddo_num_pago` antes de la posición actual
      const pagosEnParticion = array.filter(
        (p) => p.ddo_num_pago === pago.ddo_num_pago && array.indexOf(p) <= index
      );

      // Sumar los valores `monto_cancelado` de la partición
      const sumaPagosPrevios = pagosEnParticion.reduce(
        (acc, curr) => acc + (curr.monto_cancelado ? curr.monto_cancelado : 0),
        0
      );

      // Calcular la diferencia
      const saldo = Math.max(0, pago.valor - sumaPagosPrevios);

      // Retornar el pago original con la saldo calculada
      return {
        ...pago,
        saldo,
      };
    });

    return pagosConDiferencia;
  }

 


  function groupByFactura(data: PagosCliModel[]): DetallePagosFaeModel[] {
    let count = 1;
    let numPago = 0;
    let numPagoSaldo = 1;
 
    const grouped = data.reduce((acc, pago) => {
      const { ddo_doctran } = pago;
      //numPago = pago.ddo_num_pago;




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
        numPagoSaldo= 1;
      }

      // Agregamos el pago actual a la lista de pagos
      acc[ddo_doctran].pagos.push({
        key: '' + count++,
        //dias_diferencia_cuotayrec: pago.dias_diferencia_cuotayrec,
        ddo_num_pago: pago.ddo_num_pago,
        ddo_monto: pago.valor,
        valor: pago.valor,
        monto_cancelado: pago.valor_cobro,
        ddo_fechaven: pago.ddo_fechaven,
        tipo_vencido: pago.tipo_vencido,
        dias_atraso: pago.dias_atraso,
        fecha_vencimiento: pago.ddo_fechaven,
        saldo: 0
      });
      //saldo
      
      // Actualizamos los totales
      const valorCancelado = pago.valor_cobro ? pago.valor_cobro : 0
      acc[ddo_doctran].totalPagado += valorCancelado;
      if (numPago != pago.ddo_num_pago) {
        numPago = pago.ddo_num_pago;
        acc[ddo_doctran].totalApagar += pago.valor;
      }
    
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
          detallePagos.map((item, i) => (
            <View key={i} style={styles.box}>
              <InfoFacturaComponent factura={item} />
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


