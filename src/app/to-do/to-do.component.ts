import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDoText = '';
  toDoItems = [];
  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.toDoItems.push(this.toDoText);
    this.toDoText = '';
  }
  removeItem(i){
    this.toDoItems.splice(i,1);
  }
}
