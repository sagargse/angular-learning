import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input()
  itemName: string = '';
  @Output()
  itemCounter : EventEmitter<number> = new EventEmitter<number>();
  ctr: number = 0;
  //function that emit the value to the parent component
  handleClick(){
    this.ctr++;
    this.itemCounter.emit(this.ctr);
  }
}
