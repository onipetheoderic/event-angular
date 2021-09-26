import { Component, OnInit } from '@angular/core';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

Amplify.configure({
  //https://us-east-2.console.aws.amazon.com/cognito/home?region=us-east-2
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //show hide div variables
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }

  onSubmit(event: any) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password, 'the values');
  }
}
