import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-indian-child-abdam',
  templateUrl: './indian-child-abdam.component.html',
  styleUrls: ['./indian-child-abdam.component.sass'],
})
export class IndianChildAbdamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() callingAbdam: boolean = false;
  @Output() abdamCallingMehdi = new EventEmitter<boolean>();

  callMehdi() {
    this.abdamCallingMehdi.emit();
  }
}
