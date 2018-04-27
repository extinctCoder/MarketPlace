import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor( private _session: SessionStorageService) { }

  ngOnInit() {
    this._session.clear();
    this._session.store('user',null);
    console.log(this._session.retrieve('user'));
    console.log('nav');
  }

}
