import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-father-mehdi',
  templateUrl: './indian-father-mehdi.component.html',
  styleUrls: ['./indian-father-mehdi.component.sass'],
})
export class IndianFatherMehdiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  callingAbdam: boolean = false;
  calledByAbdam: boolean = false;

  toggleCallingAbdam() {
    this.callingAbdam = !this.callingAbdam;
  }

  toggleCalledByAbdam() {
    this.calledByAbdam = !this.calledByAbdam;
  }
}
