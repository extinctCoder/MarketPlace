import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignoutComponent } from './form/signout/signout.component';
import { SignupComponent } from './form/signup/signup.component';
import { SigninComponent } from './form/signin/signin.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { ProductlistComponent } from './product/productlist/productlist.component';


import {ProductService} from './service/product.service';
import {EntityService} from './service/entity.service';
import {InvoiceService} from './service/invoice.service';
import {CategoryService} from './service/category.service';


import { Ng2Webstorage } from 'ngx-webstorage';


const routes: Routes = [
  { path: '', component: ProductlistComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signout', component: SignoutComponent},
  { path: 'addproduct', component: AddproductComponent},
  { path: 'addcategory', component: AddcategoryComponent},
  { path: 'viewproducts', component: ProductlistComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignoutComponent,
    SignupComponent,
    SigninComponent,
    AddproductComponent,
    AddcategoryComponent,
    ViewproductComponent,
    ProductlistComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Ng2Webstorage,
  ],
  providers: [
    ProductService,
    EntityService,
    InvoiceService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
