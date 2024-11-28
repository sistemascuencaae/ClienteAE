export interface PagosCliModel {
  ent_identificacion: string; // Identificación del cliente
  cliente: string; // Nombre del cliente
  ddo_doctran: string; // Documento de transacción
  ddo_fecha_emision: string; // Fecha de emisión del documento
  ddo_num_pago: number; // Número de pago
  ddo_fechaven: string; // Fecha de vencimiento del documento
  tipo_vencido: string; // Estado del vencimiento
  valor: number; // Valor del documento
  valor_cobro: number | null; // Valor del cobro
  dias_atraso: number | null; // Días de atraso
  secuencia: number; // Secuencia del registro
  fecha_cobro: string | null; // Fecha del cobro
}

export interface PagoModel {
    key: string;
    //dias_diferencia_cuotayrec: number | null;
    ddo_num_pago: number;
    ddo_monto: number;
    valor: number;
    monto_cancelado: number | null;
    ddo_fechaven: string,
    tipo_vencido: string,
    dias_atraso: number | null;
    fecha_vencimiento: string;
    saldo: number;
    //interes: number;
    
}

export interface DetallePagosFaeModel {
  ent_identificacion: string;
  cliente: string;
  ddo_doctran: string;
  totalApagar: number;
  totalPagado: number;
  ddo_fecha_emision: string;
  pagos: PagoModel[];
}
