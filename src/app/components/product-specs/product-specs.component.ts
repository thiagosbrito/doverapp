import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.scss']
})
export class ProductSpecsComponent implements OnInit {


  @Input() productSpecs: string;
  specsContent: string;
  constructor() { }

  ngOnInit() {
    this.specsContent = this.productSpecs;
  }

}
