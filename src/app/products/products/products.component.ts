import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

      products: any = [];
    

  constructor(private _productService : ProductsService) { }

  ngOnInit() {
    // this._productService.getProducts().subscribe((data)=>{
    //   this.products = data;
    this.products = this._productService.getProducts();
    };


  showHideImg: boolean = true;

  toggleImage() {
    this.showHideImg = !this.showHideImg;
  }

  receiveDataFromParent(value: any){
    alert(value);
  }

}
