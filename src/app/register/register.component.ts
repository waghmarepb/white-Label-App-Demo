import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterFormConfig } from './register.form';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public colorCode = environment.colorCode;
  constructor(private fb: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    this.registerForm = RegisterFormConfig(this.fb);
  }
  public submit(): void {
    this.registerForm.valid ? this.router.navigate(['/product']) : console.log('null');
  }
}
