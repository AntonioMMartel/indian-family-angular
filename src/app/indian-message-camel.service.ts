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
  private estadoMensajeCamellito = new BehaviorSubject(
    'Mensaje por camello jaja'
  );
  estadoMensajeCamellitoActual = this.estadoMensajeCamellito.asObservable();
  constructor() {}

  updateApprovalMessage(message: string) {
    this.estadoMensajeCamellito.next(message);
  }
}
