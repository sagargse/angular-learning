import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {
  users : any | undefined = undefined;
  counter: number = 0;
  handleClick() : void {
    this.counter++;
    if(this.counter%2==0){
      this.users = undefined;
    }else{
      this.users = [
        {id:100, name:"virat", gender:'Male', age:38, salary:345323, dob:"88-11-05"}, 
        {id:200, name:"Rohit", gender:'Male', age:36, salary:445623, dob:"86-08-12"},
        {id:300, name:"Smrithi", gender:'Female', age:30, salary:545623, dob:"81-11-15"},
      ];
    }
  }
  items = ['hi','hello','welcome']
  players = [{name:'virat',age:33},{name:'sachin',age:45}]
  item1 = true;
  item2 = false;
  item3 = undefined;
  item4 = "Some Data";
}
