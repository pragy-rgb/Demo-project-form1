import { Component, VERSION } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'my-app',
  templateUrl: './register/register.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  User:User;
}
