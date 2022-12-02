import { LoginRequest } from './../../interface/login-request';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;
  request: LoginRequest;

  constructor(private service: LoginService)
  {

  }

  ngOnInit()
  {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit()
  {
    this.service.newLogin(this.form.value)
    console.log(this.form.value);
  }
}
