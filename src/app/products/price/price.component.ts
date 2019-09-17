import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input() price : any;
  @Output() priceEvent : EventEmitter<any> = new EventEmitter();

  priceArr: any = [];

  constructor() { }

  ngOnInit() {
    this.priceArr = Array(Math.round(this.price));
  }

  sendDataToParent(){
    this.priceEvent.emit("Price value = " + this.price);
  }

}
