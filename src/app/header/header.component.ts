import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  entity: any;
  userNav: boolean;

  constructor( private _session: SessionStorageService) { }

  ngOnInit() {
  this.run();
  }
  run(){
    setInterval(() => {
      this.entity = this._session.retrieve('user');
      console.log(this.entity);
      if(this.entity != null){
        this.userNav = true;
      } else{
        this.userNav = false;
      }
    }, 200 );
  }
}
