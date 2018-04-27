import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private addProduct: string;
  private productListUrl: string;

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    this.productListUrl = 'http://api.marketplace.com/list_product';
    return this.http.get<Product[]>(this.productListUrl);
  }

  addEntity (pName, productStatus, actPrice, priceType, priceRate, vatType, vatRate,  quantity,  minQuantity,  alertQuantity,  picUrl,  pDescription): Observable<Product> {

    this.addProduct = 'http://api.marketplace.com/add_product?pName=' + pName + '&productStatus=' + productStatus + '&actPrice=' + actPrice + '&priceType=' + priceType + '&priceRate=' + priceRate + '&vatType=' + vatType + '&vatRate=' + vatRate + '&quantity=' + quantity + '&minQuantity=' + minQuantity + '&alertQuantity=' + alertQuantity + '&picUrl=' + picUrl + '&pDescription=' + pDescription;

    return this.http.get<Product>(this.addProduct);
  }

}
