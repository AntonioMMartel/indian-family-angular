import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IndianMessageCamelService } from '../indian-message-camel.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-indian-child-abdam',
  templateUrl: './indian-child-abdam.component.html',
  styleUrls: ['./indian-child-abdam.component.sass'],
})
export class IndianChildAbdamComponent implements OnInit {
  message: string = '';
  textoCamello: string = '';
  constructor(private camellito: IndianMessageCamelService) {}

  ngOnInit(): void {
    this.camellito.estadoMensajeCamellitoActual.subscribe(
      (msg) => (this.message = msg)
    );
  }

  @Input() callingAbdam: boolean = false;
  @Output() abdamCallingMehdi = new EventEmitter<boolean>();

  callMehdi() {
    this.abdamCallingMehdi.emit();
  }

  submitCamelMessage() {
    this.camellito.updateApprovalMessage(this.textoCamello);
  }
}
