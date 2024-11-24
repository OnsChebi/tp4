import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Initialize Firebase
 myApp = initializeApp(environment.firebase);
  getEmail=""
  getPassword=""
  auth = getAuth();

  constructor() { }

  ngOnInit() {
  }
  forgotPassword(){}
  onForgotPassword(){}
  loginUser(){
    signInWithEmailAndPassword(this.auth, this.getEmail, this.getPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // if(user){
    //   this.router.navigate(['/home']);
    // }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('error : ', errorCode, errorMessage);
  });

  }

}
