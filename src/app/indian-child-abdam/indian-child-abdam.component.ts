import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IndianMessageCamelService } from '../indian-message-camel.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-indian-child-abdam',
  templateUrl: './indian-child-abdam.component.html',
  styleUrls: ['./indian-child-abdam.component.sass'],
})
export class IndianChildAbdamComponent implements OnInit {
  estadoCamello: string = '';
  textoCamello: string = 'Abmad quiere mandar mensaje';
  mensaje: string = '';
  @Input() callingAbdam: boolean = false;
  @Output() abdamCallingMehdi = new EventEmitter<boolean>();

  constructor(private camellito: IndianMessageCamelService) {}

  ngOnInit(): void {
    this.camellito.estadoMensajeCamellitoActual.subscribe(
      (estado) => (this.estadoCamello = estado) // Guardamos el estado del camello
    );
  }

  callMehdi() {
    this.abdamCallingMehdi.emit();
  }

  submitCamelMessage() {
    this.camellito.updateCamelloState(this.textoCamello);
    this.camellito.setCamelloMensaje(this.mensaje);
  }
}
