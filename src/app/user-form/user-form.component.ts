import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('f') submittedForm: NgForm;

  constructor() { }

  onSubmit2() {
    console.log(this.submittedForm);
 }

  onSubmit(form: ElementRef) {
    console.log(form);
 }

 onSubmit1(form: NgForm) {
  console.log(form);
}
 

  ngOnInit(): void {
  }

}
