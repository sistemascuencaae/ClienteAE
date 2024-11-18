import axios from "axios";
import { environment } from "../environments/environment";
export class ChatService {
  URL = environment.URL_SERVICIOS;
  modulo = "/api/chat/";
  token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmFsbWFjZW5lc2VzcGFuYS5lYy9hcGkvbG9naW4iLCJpYXQiOjE3MzA4MTg4MDQsImV4cCI6MTczMjU0NjgwNCwibmJmIjoxNzMwODE4ODA0LCJqdGkiOiJud1BVU3B4b3dmUnY2emdMIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4N8SAacFZl6YlBiKJcCXt78ma4Oewwkl_PqIzwiaWwU"; //localStorage.getItem("token");
  config = {
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  };

  async enviarMensaje(msg: any, converId: any, tipoConver: any): Promise<any> {
    console.log('test 2');
    const res = await axios
      .post(
        `${this.URL + this.modulo}enviarMensaje/${converId}/${tipoConver}`,
        msg,
        {
          headers: this.config.headers
        }
      )
      .then((res) => {
        return res;
      })
      .catch((error) => {
        
        return error;
      });

      return res;

  }

  //   async listarConversaciones(userId) {
  //     try {
  //       const response = await firstValueFrom(
  //         this._http.get<any>(
  //           `${this.URL + this.modulo}listConversaciones/${userId}`
  //         )
  //       );
  //       return response;
  //     } catch (error) {
  //       console.error("Error al obtener datos:", error);
  //       throw error;
  //     }
  //   }

  //   async listarMensajes(converId: number, tipoChat: string, numeroPagina) {
  //     try {
  //       const response = await firstValueFrom(
  //         this._http.get<any>(
  //           `${
  //             this.URL + this.modulo
  //           }listarMensajes/${converId}/${tipoChat}/${numeroPagina}`
  //         )
  //       );
  //       return response;
  //     } catch (error) {
  //       console.error("Error al obtener datos:", error);
  //       throw error;
  //     }
  //   }

  //   eliminarMensaje(mensajeId: any, converId, tipoConver) {
  //     return this._http.delete(
  //       `${
  //         this.URL + this.modulo
  //       }eliminarMensaje/${mensajeId}/${converId}/${tipoConver}`
  //     );
  //   }

  //   actualizarMensaje(mensaje: any, converId, tipoConver, accion: string) {
  //     return this._http.put(
  //       `${
  //         this.URL + this.modulo
  //       }actualizarMensaje/${converId}/${tipoConver}/${accion}`,
  //       mensaje
  //     );
  //   }

  //   usuariosParaChat() {
  //     return this._http.get(`${this.URL + this.modulo}usuariosParaChat`);
  //   }
  //   usersGrupoChat(converId: number) {
  //     return this._http.get(
  //       `${this.URL + this.modulo}usersGrupoChat/${converId}`
  //     );
  //   }
  //   iniciarChatNormal(data: any) {
  //     return this._http.post(`${this.URL + this.modulo}iniciarChatNormal`, data);
  //   }

  //   iniciarChatGrupal(data: any) {
  //     return this._http.post(`${this.URL + this.modulo}iniciarChatGrupal`, data);
  //   }

  //   addGaleriaArchivosChat(archivos: any) {
  //     return this._http.post(
  //       this.URL + this.modulo + "addGaleriaArchivosChat",
  //       archivos
  //     );
  //   }

  //   actualizarGrupo(data: any) {
  //     return this._http.post(`${this.URL + this.modulo}actualizarGrupo`, data);
  //   }

  //   listarMensajesNoLeidos() {
  //     return this._http.get(`${this.URL + this.modulo}listarMensajesNoLeidos`);
  //   }

  //   listarArchivosConver(converId: number, tipoChat: string) {
  //     let URL =
  //       this.URL +
  //       this.modulo +
  //       "listarArchivosConver/" +
  //       converId +
  //       "/" +
  //       tipoChat;
  //     return this._http.get(URL);
  //   }

  //   listarGaleriaConver(converId: number, tipoChat: string) {
  //     let URL =
  //       this.URL +
  //       this.modulo +
  //       "listarGaleriaConver/" +
  //       converId +
  //       "/" +
  //       tipoChat;
  //     return this._http.get(URL);
  //   }
}
