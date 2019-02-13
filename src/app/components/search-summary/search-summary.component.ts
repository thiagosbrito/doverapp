import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Products, Product } from 'src/app/core';

@Component({
  selector: 'app-search-summary',
  templateUrl: './search-summary.component.html',
  styleUrls: ['./search-summary.component.scss']
})
export class SearchSummaryComponent implements OnInit, OnChanges {

  totalDisplayedValue: any;

  @Input() items: Products;

  constructor() { }

  ngOnChanges(change) {
    if (change.items.firstChange) {
      return false;
    } else {
      this.getTotalDisplayedValue();
    }
  }

  ngOnInit() {
    this.getTotalDisplayedValue();
  }


  private getTotalDisplayedValue() {
    this.totalDisplayedValue = this.items.reduce(
      (previousValue: any, currentValue: any) => previousValue + currentValue.price, 0
    );
  }

}
