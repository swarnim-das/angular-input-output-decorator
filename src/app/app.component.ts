import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO-DO LIST';

  todos = [
    
  ]; 

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo($event){
    this.todos = this.todos.filter(i => i !== $event)
  }

  doneTodo($event){
    $event.done=true;
  }
}