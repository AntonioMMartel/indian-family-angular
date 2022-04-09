import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// Para mandar un mensaje por camello a su amigo Brahmad, Abdam tiene que llamar
// a su padre para poder mandar el mensaje por camello a su amigo.
// Basicamente Abdam llamará a este servicio y este irá al padre a que lo valide.
// Luego cuando el padre lo valide se enviará el mensaje de Abdam a su amigo Brahmad por camello.
export class IndianMessageCamelService {
  /*
  Estados: 
  1. Camello preparado jaja (Espera a la verificación del hijo (Abdam))
  2. Abmad quiere mandar mensaje (Verificación padre (Mehdi))
  3. Mensaje validado por Mehdi (Verificación amigo (Brahmad))
  */
  private estadoMensajeCamellito = new BehaviorSubject(
    'Camello preparado jaja'
  );

  private camelloMensaje: string = '';

  estadoMensajeCamellitoActual = this.estadoMensajeCamellito.asObservable();

  constructor() {}

  setCamelloMensaje(mensaje: string) {
    this.camelloMensaje = mensaje;
  }

  getCamelloMensaje() {
    return this.camelloMensaje;
  }

  updateCamelloState(estado: string) {
    this.estadoMensajeCamellito.next(estado);
  }
}
