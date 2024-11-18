import axios from "axios";
import { environment } from "../../environments/environment";
import * as Location from "expo-location";
// Función para calcular la distancia según el medio de transporte
export const getRouteDistance = async (
  origin: { latitude: number; longitude: number },
  destination: { latitude: number; longitude: number },
  mode: "driving" | "walking" | "bicycling"
) => {
  const originStr = `${origin.latitude},${origin.longitude}`;
  const destinationStr = `${destination.latitude},${destination.longitude}`;

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${originStr}&destination=${destinationStr}&mode=${mode}&key=YOUR_GOOGLE_API_KEY`
  );

  if (response.data.routes.length > 0) {
    const distance = response.data.routes[0].legs[0].distance.text; // Distancia en formato legible
    return distance;
  } else {
    throw new Error("No se pudo obtener la distancia");
  }
};


export const getCoordenadasAlmService = async (almId: number) => {
  try {
    const response = await axios.get(
      `https://almacenesespana.ec/prueba2/ecommerce-back/public/api/reactapp/getCoordenadasAlm/1`
    );
    if (response.data.status === "success") {
      return response.data;
    } else {
      throw new Error("No se pudo obtener la distancia");
    }
  } catch (error: any) {
    console.error(
      "Error en la solicitud 9999oooo8:",
      error.response?.data || error.message
    );
    throw error; // Re-lanza el error si necesitas manejarlo en otro lugar
  }
};



export const extractCoordinatesFromGoogleMapsURL = (
  url: string
): { latitude: number; longitude: number } | null => {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = url.match(regex);

  if (match) {
    const latitude = parseFloat(match[1]);
    const longitude = parseFloat(match[2]);
    return { latitude, longitude };
  }
  return null; // Si no se encuentran coordenadas
};



export const resolveShortUrlWithFetch = async (
  shortUrl: string
): Promise<string | null> => {
  try {
    const response = await fetch(shortUrl, {
      method: "HEAD",
      redirect: "manual",
    });
    if (response.status === 301 || response.status === 302) {
      return response.headers.get("location");
    }
    console.log("No se pudo resolver el enlace.");
    return null;
  } catch (error) {
    console.error("Error al resolver el enlace:", error);
    return null;
  }
};













export const solicitarPermisosUbicacion = async () => {
  // Verificar si ya se tienen permisos
  const { status: permisoActual } =
    await Location.getForegroundPermissionsAsync();

  if (permisoActual === "granted") {
    return true;
  }

  // Solicitar permisos si aún no se tienen
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    return false;
  }

  return true;
};








