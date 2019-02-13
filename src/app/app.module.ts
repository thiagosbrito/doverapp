import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent, ProductsListComponent } from './views';
import { NavbarComponent } from './core';
import {
  SearchFormComponent,
  ProductImageComponent,
  ProductSpecsComponent,
  ProductDescriptionComponent,
  SearchSummaryComponent
} from './components';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    NavbarComponent,
    SearchFormComponent,
    ProductImageComponent,
    ProductSpecsComponent,
    ProductDescriptionComponent,
    SearchSummaryComponent,
    ProductsFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
