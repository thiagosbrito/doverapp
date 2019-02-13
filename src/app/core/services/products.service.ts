import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchForm, Products, Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsList() {
    const url = '../../../assets/json/laptops.json';
    return this.http.get<Products>(url);
  }

  getProductById(id: string) {
    const url = '../../../assets/json/laptop.json';
    return this.http.get<Product>(url);
  }
}
