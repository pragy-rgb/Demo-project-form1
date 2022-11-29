import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  User: User;
  fullName!: String;
  emailAddress!: String;
  phoneNumber!: String;
  password!: string;
  rPassword!: string;
  constructor() {
    this.User = {
      fullName: 'Pragya',
      emailAddress: 'pragya.mindtree@gmail.com',
      phoneNumber: '8448778888',
      password: 'pragya123',
      rPassword: 'pragya123',
    };
  }

  ngOnInit(): void {}
}
