import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  userForm : FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      firstname : "",
      lastname :"",
      email :"",
      gender:"",
    })
  }
}
