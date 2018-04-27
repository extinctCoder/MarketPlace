import {Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interface/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public  productList = [];

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {

      this._productService.getProductList().subscribe(data => this.productList = data);



  }


}
