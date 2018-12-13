import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input()
  todos: Object;
  
  @Output()
  delete: EventEmitter<Object> =  new EventEmitter<Object>();
  
  @Output()
  done: EventEmitter<Object> = new EventEmitter<Object>();

  deleteTodo(todo){
    this.delete.emit(todo);
  }
  markdoneTodo(todo){
    this.done.emit(todo);
  }
  
  
  
}
