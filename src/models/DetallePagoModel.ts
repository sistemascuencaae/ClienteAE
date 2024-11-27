export interface PagosCliModel {
  ent_identificacion: string; // Identificación del cliente
  dias_diferencia_cuotayrec: number | null; // Días de diferencia entre cuota y recepción
  ddo_num_pago: number; // Número de pago
  cliente: string; // Nombre del cliente
  ddo_doctran: string; // Documento de transacción
  ddo_monto: number; // Monto del documento
  fecha_actual: string; // Fecha actual
  ddo_fecha_emision: string; // Fecha de emisión del documento
  ddo_fechaven: string; // Fecha de vencimiento del documento
  tipo_vencido: string; // Estado del vencimiento
  ult_fecha_pago: string | null; // Última fecha de pago
  dias_atraso: number | null; // Días de atraso
  fecha_vencimiento: string; // Fecha de vencimiento
  secuencia: number; // Secuencia del registro
  cod_comprobante_fp: string; // Código del comprobante de factura/pago
  interes: number; // Interés aplicado
  valor: number; // Valor del documento
  monto_cancelado: number; // Monto cancelado
}

export interface PagoModel {
    dias_diferencia_cuotayrec: number | null;
    ddo_num_pago: number;
    ddo_monto: number;
    valor: number;
    monto_cancelado: number;
    ddo_fechaven: string,
    tipo_vencido: string,
    dias_atraso: number | null;
    fecha_vencimiento: string;
    interes: number;
  
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
