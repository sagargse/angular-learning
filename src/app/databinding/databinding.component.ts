import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  username = "Guest";
  isDisabled = true;
  firstname = '';
  updateName(name: string) : void {
    this.username = name;
  }
  handleChange(name: string): void{
    if(name.length == 0){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }
  myStyles= {"background-color" : "yellow"};
}
