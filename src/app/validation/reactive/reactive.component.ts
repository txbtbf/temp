import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  userForm : FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      firstname : ["", [Validators.required, Validators.minLength(5)]],
      lastname :[""],
      email :["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gender:["", Validators.required],
    })
  }

  updateValidity(value) {
    const lastnameControl = this.userForm.get("lastname");
    if(value=="male"){
        lastnameControl.setValidators([Validators.required, Validators.minLength(5)]);
        } else {
          lastnameControl.clearValidators();
        }
        lastnameControl.updateValueAndValidity();
  }

}
