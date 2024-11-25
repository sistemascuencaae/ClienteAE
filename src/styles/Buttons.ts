import { StyleSheet } from "react-native";
export const styleButton = StyleSheet.create({
  dangerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#cf6b6b",
    minWidth: 180,
    marginTop: 10
  },
  primaryButton: {
    minWidth: 180,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#538bca",
  },
  transParentButton: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 150, // Limita el tamaño máximo del botón
    minWidth: 150, // Limita el tamaño máximo del botón
    height: 130, //
    margin: 10,
    borderColor: "#cac8c8",
    borderWidth: 1,
    borderRadius: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1, // Sin borde izquierdo
    borderBottomWidth: 4, // Solo el borde superior
    borderRightWidth: 4,
  },
});

export const DangerButtonSt = "#e26d6d";
export const PrimaryButtonSt = "#e26d6d";
