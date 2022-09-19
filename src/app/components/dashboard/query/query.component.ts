import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  queryForm!: FormGroup;

  createForm() {
    this.queryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      query: ['', Validators.required],
    });
  }

  submitQuery() {
    console.log(this.queryForm.value);
    Swal.fire({
      title: 'Your Query has been Submitted',
      icon: 'success',
      iconColor: '#45527F',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#45527F',
      footer: 'Our Team will get back to you soon!',
    });
  }
}
