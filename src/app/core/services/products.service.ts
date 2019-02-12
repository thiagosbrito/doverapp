import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchForm, Products } from '../interfaces';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsList(data: SearchForm) {
    const url = '../../../assets/json/laptops.json';
    return this.http.get<Products>(url);
  }
}
