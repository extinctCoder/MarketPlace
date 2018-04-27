import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


    pName: string;
    productStatus: string;
    actPrice: string;
    priceType: string;
    priceRate: string;
    vatType: string;
    vatRate: string;
    quantity: string;
    minQuantity: string;
    alertQuantity: string;
    picUrl: string;
    pDescription: string;

    newProduct;

  constructor(private _productService: ProductService ) { }

  ngOnInit() {
  }

  addProduct()
  {
    this._productService.addEntity(this.pName, this.productStatus, this.actPrice, this.priceType, this.priceRate, this.vatType, this.vatRate, this.quantity, this.minQuantity, this.alertQuantity, this.picUrl, this.pDescription).subscribe(data => this.newProduct = data);
  }
}
