import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

    @Input() pId: number;
    @Input() pName: String;
    @Input() pStatus: String;
    @Input() actPrice: number;
    @Input() priceType: String;
    @Input() priceRate: number;
    @Input() actVat: number;
    @Input() vatType: String;
    @Input() vatRate: number;
    @Input() minQuantity: number;
    @Input() alertQuantity: number;
    @Input() quantity: number;
    @Input() picUrl: String;
    @Input() pDescription: String;

    price: number;
    vat: number;
    isHidden: boolean;
    constructor() { }

  ngOnInit() {
      if (this.priceType === 'percen') {
        this.price = this.actPrice + this.actPrice * this.priceRate;
      } else {
        this.price = this.actPrice + this.priceRate;
      }
      if (this.vatType === 'percen') {
        this.vat = this.actVat + this.actVat * this.vatRate;
      } else {
      this.vat = this.actVat + this.vatRate;
    }
  }

}
