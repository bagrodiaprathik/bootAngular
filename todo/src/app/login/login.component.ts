import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HAuthenticationService } from '../service/h-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= 'test';
  password= '';
  errorMessage= 'Invalid Credentials';
  displayErrorMessage= false;

  constructor(private router:Router, private hAuthenticationService:HAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);

    
    if(this.hAuthenticationService.authentication(this.username, this.password)){
      //this.displayErrorMessage= false;
      this.router.navigate(['welcome',this.username]);

    }
    else{
      this.displayErrorMessage= true
    }

  }

}
