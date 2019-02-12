import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: string;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getProductDetail();
  }


  getProductDetail() {
    this.productService.getProductById(this.productId).subscribe(
      (productInfo: Product) => {
        this.product = productInfo;
      }
    );
  }


}
