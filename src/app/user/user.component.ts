import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name = "Sagar";
  gender = "Male";
  obj ={
    firstname:"Sagar", 
    lastname:"Raj",
    address:{state:"Bihar", city:"Patna"}
  }
}
