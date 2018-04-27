import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  cName:String;
  cDescription:String;

  constructor() { }

  ngOnInit() {
  }

  addCategory(){

  }

}
