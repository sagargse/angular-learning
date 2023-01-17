import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';
  username = 'Sagar';
  usernameArray = ["virat", "rohit", "Hardik"];
  counter: number = 0;
}
