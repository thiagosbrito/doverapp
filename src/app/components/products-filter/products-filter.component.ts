import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchForm } from 'src/app/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  filterForm: FormGroup;

  @Output() fetchFormData = new EventEmitter<SearchForm>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.fetchFormData.emit({ model: '', date: '' });
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      model: '',
      date: ''
    }, {updateOn: 'change'});
  }

  clearFilters() {
    this.filterForm.reset({
      model: '',
      date: ''
    });

    this.fetchFormData.emit(this.filterForm.value);
  }

  filterList() {
    this.fetchFormData.emit(this.filterForm.value);
  }

}
