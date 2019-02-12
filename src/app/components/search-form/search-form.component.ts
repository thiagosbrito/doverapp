import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchForm } from 'src/app/core/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  @Output() fetchFormData = new EventEmitter<SearchForm>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      model: ['', { updateOn: 'blur', validators: [Validators.required] }],
      dateFromTo: ['', { updateOn: 'blur', validators: [Validators.required] }]
    });
  }

  submitForm() {
    this.fetchFormData.emit(this.searchForm.value);
  }

}
