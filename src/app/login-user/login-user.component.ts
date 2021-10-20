import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = new User();

  }
  login(){
    alert("Hi "+ this.user.email)

  }

}
