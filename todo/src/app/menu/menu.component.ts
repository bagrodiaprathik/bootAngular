import { Component, OnInit } from '@angular/core';
import { HAuthenticationService } from '../service/h-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn:boolean = false;

  constructor(private hauthenticationService: HAuthenticationService ) { }

  ngOnInit() {

    //this.isUserLoggedIn = this.hauthenticationService.isUserLoggedIn();
  }

}
