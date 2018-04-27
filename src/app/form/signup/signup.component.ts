import { Component, OnInit } from '@angular/core';
import {EntityService} from '../../service/entity.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uName: string;
  userName: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  emailId: string;
  houseNo: string;
  roadNo: string;
  area: string;
  city: string;
  country: string;
  zipCode: string;

  newEntity: any;

  constructor(private _entityService: EntityService) { }

  ngOnInit() {
  }

    signUp() {
      this._entityService.addEntity(this.uName, this.userName, this.password, this.accountType, this.emailId, this.houseNo, this.roadNo, this.area, this.city, this.country, this.zipCode).subscribe(data => this.newEntity = data);
    }
}
