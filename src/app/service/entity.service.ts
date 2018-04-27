/* tslint:disable:max-line-length */

/* tslint:enable:max-line-length */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Entity} from '../interface/entity';


@Injectable()
export class EntityService {

  addEntityURL: string;


  constructor (private http: HttpClient) { }

  addEntity (name, user_name, password, type, email, house_no, road_no, area, city, country, zip_code): Observable<Entity> {

    this.addEntityURL = 'http://api.marketplace.com/add_entity?name=' + name + '&user_name=' + user_name + '&password=' + password + '&type=' + type + '&email=' + email + '&house_no=' + house_no + '&road_no=' + road_no + '&area=' + area + '&city=' + city + '&country=' + country + '&zip_code=' + zip_code;

    return this.http.get<Entity>(this.addEntityURL);
  }
  authenticateEntity (user_name, password): Observable<Entity> {

    this.addEntityURL = 'http://api.marketplace.com/authorize?user_name=' + user_name + '&password=' + password;

    return this.http.get<Entity>(this.addEntityURL);
  }
}


