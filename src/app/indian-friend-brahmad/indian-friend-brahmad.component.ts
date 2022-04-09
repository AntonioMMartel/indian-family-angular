import { Component, OnInit } from '@angular/core';
import { IndianMessageCamelService } from '../indian-message-camel.service';
@Component({
  selector: 'app-indian-friend-brahmad',
  templateUrl: './indian-friend-brahmad.component.html',
  styleUrls: ['./indian-friend-brahmad.component.sass'],
})
export class IndianFriendBrahmadComponent implements OnInit {
  estadoCamello: string = '';
  textoCamello: string = 'Camello preparado jaja';

  constructor(private camellito: IndianMessageCamelService) {}

  ngOnInit(): void {
    this.camellito.estadoMensajeCamellitoActual.subscribe(
      (msg) => (this.estadoCamello = msg)
    );
  }

  checkCamelMessage() {
    this.camellito.updateCamelloState(this.textoCamello);
  }

  getCamellito() {
    return this.camellito;
  }
}
