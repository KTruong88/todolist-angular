import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'Make dinner tonight!'),
      new Todo(1, 'Fold the laundry'),
      new Todo(2, 'Learn to make an Angular app')
    ];

    this.nextId = 3;
   }

   addTodo(text: string) {
     const todo = new Todo(this.nextId, text);
     this.todos.push(todo);
     this.nextId++;
   }

   getTodos(): Todo[] {
     return this.todos;
   }

   removeTodo(id: number) {
     this.todos = this.todos.filter((todo) => todo.id !== id);
   }
}
