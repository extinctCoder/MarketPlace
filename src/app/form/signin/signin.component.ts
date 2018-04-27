import { Component, OnInit } from '@angular/core';
import {EntityService} from '../../service/entity.service';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    userName: string;
    password: string;
    authenticateEntity: any;

  constructor(private _entityService: EntityService, private _session: SessionStorageService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this._entityService.authenticateEntity(this.userName, this.password).subscribe(data => this.authenticateEntity = data);
    this._session.store('user', this.authenticateEntity);
    console.log(this._session.retrieve('user'));

  }
}
