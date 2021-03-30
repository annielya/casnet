import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor:'yellow',
        visibility: 'hidden'
      })),
      state('closed', style({
        backgroundColor: 'green'
      }))
    ])
  ]
})
export class AppComponent {
  name = new FormControl('');
  surname = new FormControl('');
  message = new FormControl('');
  msg: string = "";
  isOpen = true;
  open() {
    this.isOpen = !this.isOpen;
  }
  submit() {
    this.msg = "Name: " + this.name.value + "Surname: " + this.surname.value + "Message: " + this.message.value;
    this.name.setValue("");
    this.surname.setValue("");
    this.message.setValue("");
    this.isOpen = !this.isOpen;
  }
}

