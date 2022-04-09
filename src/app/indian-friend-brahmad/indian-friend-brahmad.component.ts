import { Component, OnInit } from '@angular/core';
import { IndianMessageCamelService } from '../indian-message-camel.service';
@Component({
  selector: 'app-indian-friend-brahmad',
  templateUrl: './indian-friend-brahmad.component.html',
  styleUrls: ['./indian-friend-brahmad.component.sass'],
})
export class IndianFriendBrahmadComponent implements OnInit {
  message: string = '';
  textoCamello: string = '';
  constructor(private camellito: IndianMessageCamelService) {}

  ngOnInit(): void {}

  checkCamelMessage() {
    this.camellito.updateCamelloState(this.textoCamello);
  }
}
