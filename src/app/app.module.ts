import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent, ProductsSearchComponent } from './views';
import { NavbarComponent } from './core';
import {
  SearchFormComponent,
  ResultListComponent,
  ProductImageComponent,
  ProductSpecsComponent,
  ProductDescriptionComponent,
  SearchSummaryComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsSearchComponent,
    NavbarComponent,
    SearchFormComponent,
    ResultListComponent,
    ProductImageComponent,
    ProductSpecsComponent,
    ProductDescriptionComponent,
    SearchSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
