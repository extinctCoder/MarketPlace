import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Category } from '../interface/category';


@Injectable()
export class CategoryService {
  private addCategoryUrl: string;
  private newCategory: any;


  constructor(private http: HttpClient) { }

  addCategory(name, description): Observable<Category> {
    this.addCategoryUrl = 'http://api.marketplace.com/add_category?name=' + name + '&description=' + description;

    return this.http.get<Category>(this.addCategoryUrl);
  }

}
