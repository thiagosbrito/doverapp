import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Products } from 'src/app/core/interfaces/products.interface';
import { SearchForm } from 'src/app/core/interfaces';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {

  productsList: Products;

  constructor(private productsService: ProductsService) {
    this.productsList = [];
  }


  ngOnInit() {
  }

  searchProducts(formData: SearchForm) {
    this.productsService.getProductsList(formData).subscribe(
      (results: Products) => {
        this.productsList = results;
        console.log(this.productsList);
      }
    );
  }

}
