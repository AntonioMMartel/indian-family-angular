import { Component, OnInit } from '@angular/core';
import { IndianMessageCamelService } from '../indian-message-camel.service';
@Component({
  selector: 'app-indian-father-mehdi',
  templateUrl: './indian-father-mehdi.component.html',
  styleUrls: ['./indian-father-mehdi.component.sass'],
})
export class IndianFatherMehdiComponent implements OnInit {
  estadoCamello: string = '';
  textoCamello: string = 'Mensaje validado por Mehdi ';
  constructor(private camellito: IndianMessageCamelService) {}

  ngOnInit(): void {
    this.camellito.estadoMensajeCamellitoActual.subscribe(
      (msg) => (this.estadoCamello = msg)
    );
  }

  getCamellito() {
    return this.camellito;
  }

  callingAbdam: boolean = false;
  calledByAbdam: boolean = false;

  toggleCallingAbdam() {
    this.callingAbdam = !this.callingAbdam;
  }

  toggleCalledByAbdam() {
    this.calledByAbdam = !this.calledByAbdam;
  }

  approveCamelMessage() {
    this.camellito.updateCamelloState(this.textoCamello);
  }

  denyCamelMessage() {
    this.camellito.updateCamelloState(this.textoCamello);
  }
}
