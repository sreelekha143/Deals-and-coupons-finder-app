import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private router: Router,fb: FormBuilder) { 
    this.loginForm = fb.group({
      name: ["", Validators.required]
  });
  }
  ngOnInit() {
  }
  onSubmit(){
   
     this.router.navigate(['/Homepage']);
    console.log(this.loginForm.value)
  }
}

