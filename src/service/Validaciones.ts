export function fun_validarDecimales(numero: number, _tipo: string): number {
  // PRORCENTAJE
  if (_tipo === "P") {
    let res = "";
    if (numero > 99.99) {
      res = parseFloat("" + numero).toFixed(3);
    } else {
      res = parseFloat("" + numero).toFixed(2);
    }
    return parseFloat(res);
  }
  //BARRA DE PORCENTAJE
  if (_tipo === "B") {
    const res = parseFloat("" + numero).toFixed(1);
    return parseFloat(res);
  }
  //otro numero con 2 decimales
  const res = parseFloat("" + numero).toFixed(2);
  return parseFloat(res);
}
