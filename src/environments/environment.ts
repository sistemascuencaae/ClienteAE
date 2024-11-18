// PARA PRODUCCION
export const environment = {
  production: true,

  URL_SERVICIOS: "http://api.almacenesespana.ec",
  URL_BACKEND: "http://api.almacenesespana.ec",
  URL_BACKEND_WEBSOCKETS: "api.almacenesespana.ec",

  // PARA NAS
  URL_IMAGEN: "http://img.almacenesespana.ec:8582/crm/",

  // PARA STORAGE
  // URL_IMAGEN: "http://192.168.1.105:8009/storage/",

  // PARA EQUIFAX
  URL_FRONTEND: "crm.almacenesespana.ec",
  URL_EQUIFAX_ENROLAMIENTO_1:
    "https://adocolombia-qa.ado-tech.com/AlmespanaQA/validar-rostro-persona?callback=http%3A%2F%2F",
  URL_EQUIFAX_ENROLAMIENTO_2:
    "&key=8C9A4C40989E0EF&projectName=AlmespanaQA&product=1",
  URL_EQUIFAX_FIRMA: "&key=8C9A4C40989E0EF&projectName=AlmespanaQA&product=2",
};
