import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

export class Todo{

  constructor( 
    public id: Number,
    public description: string,
    public done: Boolean,
    public targetDate: Date){
   
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'learn to dance', false, new Date()),
    new Todo(2, 'learn to eat', false, new Date()),
    new Todo(3, 'learn to plays', false, new Date())
    
  
  ]
    
  

  constructor() { }

  ngOnInit() {
  }

}
