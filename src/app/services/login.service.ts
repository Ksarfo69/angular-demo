import { LoginRequest } from './../interface/login-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient)
  {

  }


  newLogin(request: LoginRequest)
  {
    this.http.post('http://localhost:8080/login', request)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
