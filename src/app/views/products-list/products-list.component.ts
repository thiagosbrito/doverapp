import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

import { ProductsService } from 'src/app/core/services/products.service';
import { Products } from 'src/app/core/interfaces/products.interface';
import { SearchForm } from 'src/app/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true}),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true})
      ])
    ]),
  ],
})
export class ProductsListComponent implements OnInit {

  products: Products;
  filter: SearchForm;

  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.products = [];
  }


  ngOnInit() {
    this.getProducts();
  }

  applyFilter(formData) {
    if (_.contains(formData, '')) {
      this.getProducts();
    } else {
      this.products = _.where(this.products, {
        model: formData.model,
        dateOfPurchase: moment(formData.date).format('DD/MM/YYYY')
      });
    }
  }

  getProducts() {
    this.productsService.getProductsList().subscribe(
      (results: Products) => {
        this.products = results;
      }
    );
  }

  goToProduct(id: number) {
    this.router.navigate(['details', id], { relativeTo: this.route.parent });
  }

}
