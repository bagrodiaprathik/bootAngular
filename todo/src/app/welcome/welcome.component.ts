import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessage = '';

  constructor(private route:ActivatedRoute, private service:WelcomeDataService) { }

  ngOnInit() {
   
    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage(){
   // console.log('Get welcome message');
   console.log(this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)

   );

  }

  getWelcomeMessageWithParameter(){
    // console.log('Get welcome message');
    console.log(this.service.executeHelloWorldBeanServiceWithParam(this.name));
    this.service.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
     response => this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error)
 
    );
 
   }

  handleSuccessfulResponse(response){
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error){

  }

}
