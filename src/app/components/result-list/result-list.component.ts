import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Products } from 'src/app/core/interfaces/products.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
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
export class ResultListComponent implements OnInit {

  filterForm: FormGroup;
  @Input() products: Products;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      model: '',
      dateFromTo: ''
    });
  }

  goToProduct(id: number) {
    this.router.navigate(['details', id], { relativeTo: this.route.parent });
  }

}
